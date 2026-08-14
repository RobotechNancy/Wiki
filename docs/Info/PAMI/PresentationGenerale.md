# Présentation générale

## Introduction

Le projet **PAMI** (*Petit Actionneur Mobile Indépendant*) est le firmware embarqué d'un robot mobile à deux roues motorisées, équipé d'une pince. Il tourne sur la NULCEO L432KC (même board que la base roulante du robot principal).

Le robot exécute une **file de missions** ordonnées (avancer, tourner, attraper, déposer) de manière séquentielle et autonome. Chaque mission est enfilée à l'avance, puis le système la démarre, surveille sa complétion, et passe automatiquement à la suivante.



## Architecture logicielle

Le code est organisé en couches d'abstraction croissante, chaque couche ne connaissant que celle immédiatement en dessous.

![Architecture logicielle PAMI](/images/Info/PAMI/Architecture_pami.webp)



## Cycle d'exécution

Le firmware fonctionne selon deux flux parallèles :

### 1. Boucle principale (toutes les 100 ms)

```
while(1) {
    si (100ms écoulées) -> PAMI_process()
}
```

`PAMI_process()` est le chef d'orchestre : il inspecte la mission courante, la démarre si nécessaire, vérifie si elle est terminée, et avance dans la file.

### 2. Interruptions timer (à chaque période PWM)

```
HAL_TIM_PWM_PulseFinishedCallback() -> PAMI_update()
                                 -> Motor_update_steps_remaining()
```

Chaque impulsion PWM envoyée au pilote de moteur correspond à un pas. L'interruption décrémente le compteur `steps_remaining` de chaque moteur, permettant de savoir quand s'arrêter.



## Démarrage rapide

```c
// 1. Initialisation (dans main.c)
PAMI_init(&pami);
Motor_enable(&left_wheel);
Motor_enable(&right_wheel);

// 2. Définition de la mission
PAMI_move_straight(&pami, 1000, 200);  // 1000 mm à 200 mm/s
PAMI_rotate(&pami, 90, 30, CENTER);    // tourner de 90° à 30°/s autour du centre entre les deux roues
PAMI_grab(&pami);                      // Fermer la pince

// 3. Exécution automatique dans la boucle principale
// PAMI_process() gère tout le reste
```



## Configuration globale (`PAMI_config.h`)

Toutes les constantes physiques du robot sont centralisées dans `PAMI_config.h`.

| Constante | Valeur | Description |
|---|---|---|
| `CYCLE_PERIOD` | 100 ms | Période de la boucle principale |
| `WHEEL_RADIUS_MM` | 40 mm | Rayon des roues |
| `WHEEL_DISTANCE_TO_CENTER_MM` | 60 mm | Distance roue <-> centre de l'axe |
| `MOBILE_BASE_ACCELERATION` | 500 mm/s² | Accélération de la base mobile |
| `DISTANCE_CORRECTION_FACTOR` | 0.8197 | Coefficient de correction sur la distance à parcourir pour chaque moteur |
| `GRAB_ANGLE` | 30° | Angle servo pour attraper |
| `DROP_ANGLE` | 0° | Angle servo pour déposer |
| `MISSION_QUEUE_MAX_SIZE` | 20 | Taille maximale de la file de missions |



## Pinout (fichier `.ioc`)

| Broche | Label | Usage |
|---|---|---|
| TIM1 CH4 (PA11 / D10) | - | Signal PWM STEP — moteur gauche |
| TIM15 CH2 (PA3 / A2) | - | Signal PWM STEP — moteur droit |
| TIM16 CH1N (PB6 / D5) | - | Signal PWM du servomoteur |
| PA1 / A1 | DRIVER_LEFT_DIR | Signal de direction DIR — moteur gauche |
| PB5 / D11 | DRIVER_LEFT_ENN | Signal enable ENN — moteur gauche |
| PB4 / D12 |  - | Signal diagnostic DIAG — moteur gauche (non utilsé dans le code) |
| PA8 / D9 | DRIVER_RIGHT_DIR | Signal de direction DIR — moteur droit |
| PA5 / A4 | DRVIER_RIGHT_ENN | Signal enable ENN — moteur droit |
| PA4 / A3 | - | Signal diagnostic DIAG — moteur droit (non utilsé dans le code) |