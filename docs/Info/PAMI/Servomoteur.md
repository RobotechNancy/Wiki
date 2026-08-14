# Servomoteur Parallax

## Description

`Parallax_servo` pilote un servo-moteur Parallax standard via un signal **PWM à impulsions variables**. Ce type de servo s'attend à recevoir des impulsions répétées, dont la **durée de l'état haut** encode la position angulaire cible.

Le servo est commandé via un timer STM32 configuré dynamiquement à chaque changement d'angle.

```c
typedef struct Parallax_servo {
    TIM_HandleTypeDef* timer_handle;
    uint32_t           timer_channel;
    uint32_t           timer_frequency; // Hz
    uint8_t            angle;           // position courante [0° à 180°]
    Debugger		   debugger;
} Parallax_servo;
```

## Attributs

| Attribut | Type | Unité | Description |
|---|---|---|---|
| `timer_handle` | `TIM_HandleTypeDef*` | — | Handle du timer STM32 générant le PWM |
| `timer_channel` | `uint32_t` | — | Canal du timer |
| `timer_frequency` | `uint32_t` | Hz | Fréquence de base du timer (32 MHz) |
| `angle` | `uint8_t` | degrés | Dernière position commandée [0° à 180°] (mise à jour par `Parallax_servo_move_to`) |
| `debugger` | `Debugger*` | - | Logger UART |


## Codes de statut
 
```c
typedef enum Servo_status {
    SERVO_OK = 0,
    SERVO_ERR_INVALID_PARAMS,  // angle > 180°
} Servo_status;
```

## Protocole de commande du servo

Un servo Parallax attend un train d'impulsions répétées :

![Fonctionnement servomoteur](img/Parallax%20standard%20servo.webp)

- **H (durée haute)** : encode l'angle (750 µs à 2250 µs)
- **DELAY** : pause entre impulsions (20 000 µs = 20 ms)
- **Période totale** : H + DELAY (20,75 ms à 22,25 ms)

Le servo maintient sa position tant que les impulsions continuent. Le firmware ne coupe jamais le PWM après avoir commandé une position, le servo reste donc verrouillé.


## Méthodes publiques

### `Parallax_servo_init`

```c
Servo_status Parallax_servo_init(Parallax_servo* self, Debugger* debugger, uint32_t timer_frequency);
```

Initialise l'attribut `angle` à 0°.

---

### `Parallax_servo_move_to`

```c
Servo_status Parallax_servo_move_to(Parallax_servo* self, uint8_t angle);
```

Déplace le servo à la position angulaire demandée.

| Paramètre | Type | Unité | Contraintes |
|---|---|---|---|
| `angle` | `uint8_t` | degrés | 0° à 180° — retourne `SERVO_ERR_INVALID_PARAMS` si > 180° et le loggue |


**Étapes internes :**

1. **Calcul de la durée d'impulsion haute** (interpolation linéaire) :

```
high_pulse = ((MAX_PULSE - MIN_PULSE) / 180) × angle + MIN_PULSE
```

2. **Calcul de la période totale :**
```
timer_period = high_pulse + DELAY_BETWEEN_PULSES
```

3. **Calcul du rapport cyclique :**
```
duty_cycle = high_pulse / timer_period
```

4. **Configuration des registres timer** (même algorithme que `Driver_send_pwm_signal`) :


5. **Mise à jour de `self->angle`** et démarrage du PWM via `HAL_TIM_PWM_Start` (non-IT — pas besoin de compter les impulsions).


## Constantes de timing

```c
#define DELAY_BETWEEN_PULSES   20000  // µs — délai entre impulsions
#define HIGH_PULSE_MIN_DURATION  750  // µs — impulsion pour 0°
#define HIGH_PULSE_MAX_DURATION 2250  // µs — impulsion pour 180°
```