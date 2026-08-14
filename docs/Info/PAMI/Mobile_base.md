# Base roulante PAMI


## Description

`Mobile_base` représente le châssis du robot : deux roues fixées sur des [moteurs pas à pas](Stepper) pilotées de manière différentielle. Elle traduit des commandes de haut niveau (distance en mm, vitesse en mm/s, angle en degrés) en commandes moteur (pas, pas/s), et remonte les erreurs détectées sous forme de codes de statut.

```c
typedef struct Mobile_base {
	Stepper_motor* left_wheel;
	Stepper_motor* right_wheel;
	Debugger*	   debugger;
	uint16_t 	   acceleration; // [millimeters per second²]
	uint8_t 	   wheel_radius; // [millimeters]
	uint16_t 	   wheel_distance_to_center; // [millimeters] The distance between a wheel and the center of the wheels' axis.
} Mobile_base;
```

## Attributs

| Attribut | Type | Unité | Description |
|---|---|---|---|
| `left_wheel` | `Stepper_motor*` | — | Moteur de la roue gauche |
| `right_wheel` | `Stepper_motor*` | — | Moteur de la roue droite |
| `debugger` | `Debugger*` | — | Module de log des erreurs |
| `acceleration` | `uint16_t` | mm/s² | Accélération des deux roues |
| `wheel_radius` | `uint8_t` | mm | Rayon de chaque roue |
| `wheel_distance_to_center` | `uint16_t` | mm | Distance entre une roue et le centre de l'axe inter-roues |

> [!NOTE]
> Ces valeurs sont définies dans `PAMI_config.h` et passées à la structure lors de l'initialisation dans `main.c`.


## Codes de statut
 
```c
typedef enum Mobile_base_status {
  MOBILE_BASE_OK = 0,
  MOBILE_BASE_ERR_ZERO_WHEEL_RADIUS,   // wheel_radius == 0
  MOBILE_BASE_ERR_ZERO_D2C,            // wheel_distance_to_center == 0
  MOBILE_BASE_ERR_INVALID_PARAMS,      // angle hors plage ou couple (step, speed) inavlide
} Mobile_base_status;
```
 
Toutes les fonctions publiques retournent un `Mobile_base_status`.


## Méthodes publiques

### `Mobile_base_init`

```c
Mobile_base_status Mobile_base_init(Mobile_base* self, Debugger* debugger, uint32_t timer_frequency);
```

Initialise les deux moteurs avec l'accélération convertie en pas/s². Vérifie que `wheel_radius` et `wheel_distance_to_center` sont non nuls avant tout calcul.

---

### `Mobile_base_move_straight`

```c
Mobile_base_status Mobile_base_move_straight(Mobile_base* self, uint16_t distance, int16_t speed);
```

Commande les deux moteurs pour avancer ou reculer en ligne droite.

| Paramètre | Type | Unité | Description |
|---|---|---|---|
| `distance` | `uint16_t` | mm | Distance à parcourir |
| `speed` | `int16_t` | mm/s | Positif = avant, négatif = arrière |

> [!NOTE]
> - La roue gauche tourne en sens inverse de la roue droite pour avancer en ligne droite car les moteurs sont posés en miroir.
> - Le coeffecient `DISTANCE_CORRECTION_FACTOR` est appliqué à la distance de chaque roue.

---

### `Mobile_base_rotate`

```c
Mobile_base_status Mobile_base_rotate(Mobile_base* self, uint16_t angle, int16_t rotation_speed, enum Rotation_center rotation_center);
```

Rotation autour d'un centre configurable.

| Paramètre | Type | Unité | Contraintes |
|---|---|---|---|
| `angle` | `uint16_t` | degrés | 1° à 360°, sinon retourne `MOBILE_BASE_ERR_INVALID_PARAMS` |
| `rotation_speed` | `int16_t` | degrés | -360° à +360° (0° non compris), sinon retourne `MOBILE_BASE_ERR_INVALID_PARAMS` |
| `rotation_center` | `enum Rotation_center` | N/A | `CENTER`, `LEFT_WHEEL` ou `RIGHT_WHEEL` |

**Calcul de la distance à parcourir par chaque roue :**

| `rotation_center` | Roue gauche | Roue droite |
|---|---|---|
| `CENTER` | `angle_rad × d2c` | `angle_rad × d2c` |
| `LEFT_WHEEL` | `0` | `angle_rad × 2 × d2c` |
| `RIGHT_WHEEL` | `angle_rad × 2 × d2c` | `0` |


> [!NOTE]
> - Le coeffecient `DISTANCE_CORRECTION_FACTOR` est appliqué à la distance de chaque roue.

---

### `Mobile_base_stop`

```c
Mobile_base_status Mobile_base_stop(Mobile_base* self);
```

Décélération progressive : met la vitesse cible à 0 pour les deux moteurs. Les moteurs s'arrêtent après la rampe de décélération.

---

### `Mobile_base_emergency_stop`

```c
void Mobile_base_emergency_stop(Mobile_base* self);
```

Arrêt immédiat sans décélération : coupe le signal PWM sur les deux moteurs instantanément.

---

### `Mobile_base_process`

```c
void Mobile_base_process(Mobile_base* self);
```

À appeler à chaque cycle (toutes les (toutes les `CYCLE_PERIOD` ms)). Délègue à `Motor_process()` pour chacune des deux roues : ajustement de la vitesse courante vers la vitesse cible.



## Méthodes privées — Conversions d'unités

Ces trois fonctions traduisent les unités physiques en unités moteur (pas).

### `__Distance_to_step`

```c
uint32_t __Distance_to_step(Mobile_base* self, uint16_t distance);
```

Convertit une distance linéaire (mm) en nombre de pas.

```
angle_roue (°) = distance × 180 / (rayon × π)
pas = angle_roue / ANGLE_PER_STEP
```

Avec `ANGLE_PER_STEP = 0.18°` (résolution du microstep actuel).

### `__Speed_to_steps_per_sec`

```c
int32_t __Speed_to_steps_per_sec(Mobile_base* self, int16_t speed);
```

Convertit une vitesse linéaire (mm/s) en fréquence PWM (pas/s = Hz).

```
vitesse_angulaire (°/s) = vitesse × 180 / (rayon × π)
pas/s = vitesse_angulaire / ANGLE_PER_STEP
```

### `__Acceleration_to_steps_per_sec_2`

```c
uint32_t __Acceleration_to_steps_per_sec_2(Mobile_base* self, uint16_t acceleration);
```

Même logique que `__Speed_to_steps_per_sec`, appliquée à l'accélération (mm/s² -> pas/s²).