# Pince


## Description

`Gripper` est la pince du robot. Elle encapsule un [servo-moteur Parallax](Servomoteur) et expose deux actions simples : attraper (`grab`) et déposer (`drop`). Les angles correspondants sont définis dans `PAMI_config.h`.

```c
typedef struct Gripper {
	Parallax_servo* servo;
	uint8_t			grab_angle;
	uint8_t			drop_angle;
} Gripper;
```

## Attributs

| Attribut | Type | Description |
|---|---|---|
| `servo` | `Parallax_servo*` | Pointeur vers le servo-moteur qui actionne la pince |
|`grab_angle`| `uint8_t` | Angle de fermeture de la pince (valeur attribuée à partir de `PAMI_config.h` ) |
|`drop_angle`| `uint8_t` | Angle d'ouverture de la pince (valeur attribuée à partir de `PAMI_config.h` ) |


---

## Méthodes publiques

> [!NOTE]
> Chaque méthode retourne `Servo_status` propagé jusqu'à `PAMI` pour logging éventuel.

### `Gripper_init`

```c
Servo_status Gripper_init(Gripper* self, Debugger* debugger, uint32_t timer_frequency);
```

Initialise le servo-moteur de la pince. Appelé par `PAMI_init`.

---

### `Gripper_grab`

```c
Servo_status Gripper_grab(Gripper* self);
```

Ferme la pince en déplaçant le servo à l'angle `GRAB_ANGLE` (défini dans `PAMI_config.h`, 30° par défaut).

---

### `Gripper_drop`

```c
Servo_status Gripper_drop(Gripper* self);
```

Ouvre la pince en déplaçant le servo à l'angle `DROP_ANGLE` (défini dans `PAMI_config.h`, 0° par défaut).

---

> [!NOTE]
> La fin d'une mission `GRAB` ou `DROP` est détectée dans `PAMI_process` en comparant `servo->angle` à `mission.angle_param`. Cela fonctionne car `Parallax_servo_move_to` met à jour `self->angle` **immédiatement** après avoir configuré le timer, sans attendre que le servo ait physiquement atteint sa position. La détection est donc logique (commande envoyée), pas mécanique (position réelle atteinte).