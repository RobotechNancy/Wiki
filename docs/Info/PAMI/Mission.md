# Système de missions


## Description

`Mission` est une structure de données légère représentant une tâche atomique que le PAMI doit accomplir. Les missions ne sont jamais exécutées directement par l'utilisateur : elles sont créées par les méthodes `PAMI_move_straight()`, `PAMI_rotate()`, etc., et stockées dans la file.

```c
typedef struct Mission {
	enum Mission_title   title;
	enum Mission_type    type;
	enum Mission_state   state;
	uint16_t 		     distance_param; // mm [max 2000mm]
	int16_t			     speed_param; // mm/sec [-2000mm/sec to 2000mm/sec]
	uint16_t			 angle_param; // degrees [0° to 360°]
	int16_t				 rotation_speed_param; // degrees per sec
	enum Rotation_center rotation_center; // enum (CENTER, LEFT_WHEEL or RIGHT_WHEEL)
} Mission;
```

## Champs

| Champ | Type | Description |
|---|---|---|
| `title` | `enum Mission_title` | Nature de la mission (`STRAIGHT`, `ROTATE`, `GRAB`, `DROP`) |
| `type` | `enum Mission_type` | Famille de mission (`MOVEMENT` ou `GRIPPER`) |
| `state` | `enum Mission_state` | État courant (`NOT_STARTED`, `ONGOING`, `DONE`) |
| `distance_param` | `uint16_t` | Distance cible en mm (utilisé par `STRAIGHT`) |
| `speed_param` | `int16_t` | Vitesse cible en mm/s (utilisé par `STRAIGHT`) |
| `angle_param` | `uint16_t` | Angle cible en degrés (utilisé par `ROTATE`, `GRAB`, `DROP`) |
|`rotation_speed_param`| `int16_t` | Vitesse angulaire en °/s (utilisée par `ROTATE`) |
| `rotation_center` | `enum Rotation_center` | Centre de rotation (utilisé par `ROTATE`) |

## Énumérations

```c
enum Mission_title { STRAIGHT, ROTATE, GRAB, DROP };
enum Mission_type  { MOVEMENT, GRIPPER };
enum Mission_state { NOT_STARTED, ONGOING, DONE };
```

## Méthode

### `Mission_is_valid`

```c
bool Mission_is_valid(Mission* self);
```

Valide les paramètres d'une mission avant son enfilage. Retourne `false` si les paramètres sont incohérents, auquel cas `__PAMI_append_mission` rejette la mission et logue l'erreur.

| Titre | Règles de validation |
|---|---|
| `STRAIGHT` | `distance_param != 0` ET `speed_param != 0` |
| `ROTATE` | `angle_param != 0 && angle_param <= 360` ET `rotation_speed_param != 0 && -360°/s <= rotation_speed_param <= +360°/s` |
| `GRAB` | Toujours valide |
| `DROP` | Toujours valide |
| Autre | Invalide |


## Cycle de vie d'une mission

![Cycle de vie d'une mission](/images/Info/PAMI/Cycle_mission.webp)