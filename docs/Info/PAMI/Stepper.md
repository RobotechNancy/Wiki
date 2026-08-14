# Moteur pas-à-pas

## Description

`Stepper_motor` est l'abstraction d'un moteur pas-à-pas piloté via un [driver TMC2209](TMC2209). Il gère la **rampe de vitesse** (accélération/décélération progressive) et le **comptage de pas restants** pour savoir quand s'arrêter.

La vitesse est exprimée en **pas/s**, ce qui correspond directement à la **fréquence du signal PWM** envoyé au pilote (1 front montant = 1 pas).

```c
typedef struct Stepper_motor {
	TMC2209_driver* driver;
	Debugger*		debugger; // The error logger
	int32_t 		current_speed; // steps/s (Since 1 step -> 1 rising-edge which occurs in a PWM period, so steps/s <=> Hz)
	int32_t 		target_speed; // steps/s
	uint32_t	    steps_remaining; // in steps (How many steps since motor's booted)
	uint32_t		cycle_period; // the time to wait before the next loop iteration
	uint32_t	    acceleration; // in steps/s^2 (How much speed (steps/s) to add to the current speed each second)
} Stepper_motor;
```

## Attributs

| Attribut | Type | Unité | Description |
|---|---|---|---|
| `driver` | `TMC2209_driver*` | — | Pilote matériel associé |
| `debugger` | `Debugger*` | — | Module de log des erreurs |
| `current_speed` | `int32_t` | pas/s | Vitesse actuelle (signe = direction) |
| `target_speed` | `int32_t` | pas/s | Vitesse cible à atteindre |
| `steps_remaining` | `uint32_t` | pas | Pas restants avant de commencer la décélération |
| `cycle_period` | `uint32_t` | ms | Période de la boucle principale (`CYCLE_PERIOD`) |
| `acceleration` | `uint32_t` | pas/s² | Rampe d'accélération et de décélération, définie par `Motor_init` |


## Codes de statut
 
```c
typedef enum Motor_status {
    MOTOR_OK = 0,
    MOTOR_ERR_ZERO_ACCEL,      // acceleration == 0
    MOTOR_ERR_INVALID_PARAMS,  // speed ou steps nul, ou distance trop courte
} Motor_status;
```

## Méthodes publiques

### `Motor_init`

```c
Motor_status Motor_init(Stepper_motor* self, Debugger* debugger, uint32_t acceleration, uint32_t timer_frequency);
```

Initialise le driver puis définit l'accélération du moteur en pas/s², et la fréquence du timer lié au moteur.

---

### `Motor_enable` / `Motor_disable`

```c
Motor_status Motor_enable(Stepper_motor* self);
Motor_status Motor_disable(Stepper_motor* self);
```

Active ou désactive le moteur via la broche ENN du driver (active LOW : `RESET` = activé, `SET` = désactivé).

---

### `Motor_stop`
 
```c
Motor_status Motor_stop(Stepper_motor* self);
```
 
Décélération progressive : fixe `target_speed` à 0. Le moteur s'arrête après la rampe.

---

### `Motor_emergency_stop`

```c
Motor_status Motor_emergency_stop(Stepper_motor* self);
```

Coupe immédiatement le signal PWM (fréquence = 0). Pas de rampe de décélération.

---

### `Motor_make_steps`

```c
Motor_status Motor_make_steps(Stepper_motor* self, int32_t speed, uint32_t steps);
```

Commande le moteur pour effectuer un nombre de pas donné à une vitesse donnée, avec gestion automatique de la décélération.

| Paramètre | Type | Description |
|---|---|---|
| `speed` | `int32_t` | Vitesse cible en pas/s (signe = direction), doit être != 0|
| `steps` | `uint32_t` | Nombre total de pas à effectuer, doit être > 0 |

**Logique de calcul de `steps_remaining` :**

La décélération doit commencer avant la fin pour que le moteur s'arrête exactement au bon endroit. Le calcul détermine combien de pas sont nécessaires pour décélérer depuis `speed` jusqu'à 0 :

```
durée_acc   = |speed| / acceleration          (secondes)
pas_acc     = (durée_acc × |speed|) / 2       (pas pendant l'accélération)

si 2 × pas_acc > steps : MOTOR_ERR_INVALID_PARAMS  (distance insuffisante)
sinon : steps_remaining = steps - pas_acc
```
Le moteur commence à décélérer quand `steps_remaining` atteint 0.

---

### `Motor_process`

```c
Motor_status Motor_process(Stepper_motor* self);
```

À appeler à chaque cycle de la boucle principale. Effectue dans l'ordre :

1. Si `steps_remaining == 0` : met `target_speed` à 0 (début de décélération)
2. Calcule la prochaine vitesse via la rampe d'accélération
3. Met à jour la broche DIR selon le signe de la vitesse
4. Envoie le signal PWM au driver

---

### `Motor_update_steps_remaining`

```c
void Motor_update_steps_remaining(Stepper_motor* self, TIM_HandleTypeDef* htim);
```

À appeler dans le callback d'interruption timer. Décrémente `steps_remaining` de 1 à chaque interruption **si et seulement si** :
- Le timer correspond bien au timer de ce moteur
- Le moteur est en mouvement (`current_speed != 0`)
- Il reste des pas à faire (`steps_remaining != 0`)

Chaque interruption correspond à une période PWM complète = **un pas effectué**.



## Méthodes privées
 
| Méthode | Description |
|---|---|
| `__Motor_compute_next_speed` | Calcule la vitesse du prochain cycle selon la rampe : `current ± acceleration_per_loop`, borné à `target` |
| `__Motor_set_current_speed` | Setter pour `current_speed` |
| `__Motor_set_target_speed` | Setter pour `target_speed` — aussi utilisé par `Mobile_base_stop` |
| `__Motor_get_target_speed` | Getter pour `target_speed` |
| `__Motor_get_current_speed` | Getter pour `current_speed` |
| `__Motor_get_acceleration` | Getter pour `acceleration` |
| `__Motor_get_steps_remaining` | Getter pour `steps_remaining` |
| `__Motor_min` / `__Motor_max` | Utilitaires min/max sur `int32_t` |
| `__Motor_abs` | Valeur absolue sur `int32_t`, retourne `uint32_t` |

**Fonctionnement du contrôle de vitesse**

Le moteur ne peut pas atteindre instantanément sa vitesse cible. À chaque cycle de `CYCLE_PERIOD` ms, `Motor_process` calcule la prochaine vitesse :

```
acceleration_par_cycle = acceleration (pas/s²) × 0.1 (s)

si current < target : next = min(target, current + acceleration_par_cycle)
si current > target : next = max(target, current - acceleration_par_cycle)
si current == target : next = current
```