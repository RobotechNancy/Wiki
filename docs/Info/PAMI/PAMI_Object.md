# Objet principal PAMI


## Description

`PAMI` est l'objet racine du firmware. Il agrège la base mobile et la pince, et gère une **file de missions** (`mission_queue`) exécutées séquentiellement. C'est le seul objet manipulé directement depuis `main.c`.

Il ne contient aucune logique de mouvement en propre : il délègue à [Mobile base](Mobile_base) et [Gripper](Gripper) en fonction de la mission courante, et propage leurs codes de statut via le [Debugger](Debugger).

```c
typedef struct PAMI {
    Mobile_base* mobile_base;
    Gripper*     gripper;
    Debugger*    debugger;
    bool         there_is_mission;
    bool         is_halted;
    Mission      mission_queue[MISSION_QUEUE_MAX_SIZE];
    int          current_mission_index;
    int          last_mission_index;
} PAMI;
```

## Attributs

| Attribut | Type | Description |
|---|---|---|
| `mobile_base` | `Mobile_base*` | Pointeur vers la base mobile (roues) |
| `gripper` | `Gripper*` | Pointeur vers la pince |
| `debugger` | `Debugger*` | Pointeur vers le logger UART. Si son attribut `is_active == false` , les erreurs sont silencieuses |
| `there_is_mission` | `bool` | Indique si la file contient au moins une mission non effectuée |
| `is_halted` | `bool` | Si `true`, le robot s'arrête immédiatement (arrêt urgence ou détection obtacle) |
| `mission_queue` | `Mission[MISSION_QUEUE_MAX_SIZE]` | Tableau fixe des missions à exécuter |
| `current_mission_index` | `int` | Index de la mission en cours (`-1` = aucune) |
| `last_mission_index` | `int` | Index de la dernière mission enfilée (`-1` = file vide) |

## Codes de statut
 
```c
typedef enum PAMI_status {
    PAMI_OK = 0,
    PAMI_ERR_INVALID_MISSION,   // Mission_is_valid() a retourné false
    PAMI_ERR_QUEUE_FULL,        // File pleine (MISSION_QUEUE_MAX_SIZE atteint)
    PAMI_ERR_EXECUTION_FAILED,  // Une bibliothèque a retourné un statut non-OK
} PAMI_status;
```
 
Toutes les fonctions publiques sauf `PAMI_process` et `PAMI_update` retournent un `PAMI_status`. Si un `Debugger` est attaché et actif, toute valeur non-`PAMI_OK` est automatiquement loguée avant d'être retournée.


## Méthodes publiques

### `PAMI_init`

```c
PAMI_status PAMI_init(PAMI* self, uint32_t timer_frequency);
```
 
Initialise le PAMI et tous ses sous-systèmes. Doit être appelé une seule fois, avant toute autre méthode. Elle :

- Fixe la fréquence du timer pour tous les sous-modules l'utilisant (moteur et servo)
- Appelle `Mobile_base_init()` et `Gripper_init()`, et propage toute erreur retournée
- Met `is_halted` à `false`
- Remet les index de mission à `-1`

> [!IMPORTANT]
> Le `Debugger` doit être initialisé **avant** `PAMI_init` si vous souhaitez logger les erreurs d'initialisation.

**Exemple :**
```c
Debugger debugger;
Debugger_init(&debugger, &huart2);
Debugger_enable(&debugger);
 
PAMI pami = { .mobile_base = &mobile_base, .gripper = &gripper, .debugger = &debugger };
PAMI_status status = PAMI_init(&pami);
```


---

### `PAMI_move_straight`

```c
PAMI_status PAMI_move_straight(PAMI* self, uint16_t distance, int32_t speed);
```

Enfile une mission de déplacement en ligne droite.

| Paramètre | Type | Unité | Contraintes |
|---|---|---|---|
| `distance` | `uint16_t` | mm | max ~2000 mm, doit être > 0 |
| `speed` | `int32_t` | mm/s | positif = avant, négatif = arrière, doit être != 0 |

> [!NOTE]
> La correction de distance (`DISTANCE_CORRECTION_FACTOR`) est appliquée dans `Mobile_base_move_straight`.


**Exemple :**
```c
PAMI_move_straight(&pami, 500, 150);  // Avancer 500 mm à 150 mm/s
PAMI_move_straight(&pami, 300, -100); // Reculer 300 mm à 100 mm/s
```

---

### `PAMI_rotate`

```c
PAMI_status PAMI_rotate(PAMI* self, uint16_t angle, int16_t rotation_speed, enum Rotation_center rotation_center);
```

Enfile une mission de rotation sur place, ou par rapport à l'une des roues.

| Paramètre | Type | Unité | Contraintes |
|---|---|---|---|
| `angle` | `uint16_t` | degrés | 1° à 360° |
| `rotation_speed` | `int16_t` | degrés / secondes | -360° à +360° (non nul); détermine le sens de rotation |
| `rotation_angle` | `enum Rotation_center` | N/A | `CENTER`, `LEFT_WHEEL` ou `RIGHT_WHEEL` |

**Exemple :**
```c
PAMI_rotate(&pami, 360, 180, CENTER); // Faire un tour complet dans le sens trigonométrique à 180°/s
PAMI_rotate(&pami, 180, -90, LEFT_WHEEL); // Tourner à 180° dans le sens anti-trigonométrique à 90°/s
```

---

### `PAMI_grab`

```c
PAMI_status PAMI_grab(PAMI* self);
```

Enfile une mission pour fermer la pince (attraper un objet). Déplace le servo à `GRAB_ANGLE` (défini dans `PAMI_config.h`, par défaut 30°).

---

### `PAMI_drop`

```c
PAMI_status PAMI_drop(PAMI* self);
```

Enfile une mission pour ouvrir la pince (déposer un objet). Déplace le servo à `DROP_ANGLE` (défini dans `PAMI_config.h`, par défaut 0°).

---

### `PAMI_process`

```c
void PAMI_process(PAMI* self);
```

**Chef d'orchestre du robot.** À appeler périodiquement dans la boucle principale (toutes les `CYCLE_PERIOD` ms).

Logique interne à chaque appel :

```
si (is_halted)
    -> arrêt d'urgence de la base mobile
 
sinon
    si (file vide ou toutes missions terminées)
        -> décélération douce des moteurs
 
    sinon, selon l'état de la mission courante :
        NOT_STARTED -> démarrage + passage à ONGOING
                      si la bibliothèque retourne une erreur -> DONE immédiat + log
        ONGOING     -> vérification de fin de mission :
                       MOVEMENT : moteurs à l'arrêt ?  -> DONE
                       GRIPPER  : angle atteint ?       -> DONE
        DONE        -> avance au prochain index
 
-> dans tous les cas : Mobile_base_process() est appelé
```


> [!IMPORTANT]
> `Mobile_base_process()` est toujours appelé, même en l'absence de mission, pour que la décélération des moteurs puisse se faire progressivement, ou en absence de mouvement pour clamper les moteurs.

> [!NOTE]
> En cas d'erreur lors du démarrage d'une mission (`__PAMI_start_mission`), la mission est marquée `DONE` immédiatement et l'erreur est loguée. La file continue de s'exécuter normalement — une mission échouée ne bloque pas les suivantes.


---

### `PAMI_update`

```c
void PAMI_update(PAMI* self, TIM_HandleTypeDef* htim);
```

À appeler dans le callback d'interruption timer (`HAL_TIM_PWM_PulseFinishedCallback()`). Met à jour le compteur de pas restants de chaque moteur. Pas de gestion d'erreur ici.

```c
// Dans main.c
void HAL_TIM_PWM_PulseFinishedCallback(TIM_HandleTypeDef *htim) {
    PAMI_update(&pami, htim);
}
```

---

## Méthodes privées

| Méthode | Rôle |
|---|---|
| `__PAMI_append_mission(self, m)` | Valide (`Mission_is_valid`), vérifie que la file n'est pas pleine, puis ajoute la mission |
| `__PAMI_start_mission(self, m)` | Dispatche l'exécution vers `Mobile_base` ou `Gripper` ; marque la mission `DONE` et logue si erreur |
| `__PAMI_set_state(self, state)` | Met à jour le champ `state` de la mission courante dans la file |