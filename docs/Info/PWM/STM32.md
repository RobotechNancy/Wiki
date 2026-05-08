---
title: STM32
description: Comment générer un signal PWM sur un microcontrôleur STM32
---

# Génération de signaux PWM avec STM32 

## Définition

Le PWM (Pulse Width Modulation) consiste à moduler la largeur d'une impulsion pour contrôler la puissance moyenne délivrée à un composant.
C'est un signal carré dont le rapport cyclique (temps haut / temps total) est variable :
<img src="/images/Info/PWM/signals.webp" alt="PWM">

Sur les microcontrôleurs STM32, la génération des signaux PWM se fait à l'aide des timers. 

## Timers et interruptions

Un **timer** est un circuit logique numérique qui permet de compter, en incrémentant une valeur à chaque cycle d'horloge. Voici une vidéo très instructive qui en explique le fonctionnement, ainsi que la notion d'interruption.

<iframe width="100%" height="415" src="https://www.youtube.com/embed/VfbW6nfG4kw?si=nHV48kzDUsvhJzZw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Parlons un peu plus en détails de l'architecture des timers dans les microcontrôleurs STM32 (timesptamp : 3:39 de la vidéo). Comme vous pouvez le voir dans l'onglet `Clock configuration` du fichier `.ioc` sur STM32CubeMX, l'horloge interne du microcontrôleur (représenté par `HCLK`) est divisée en deux bus (`APB1` et `APB2`), et chaque bus est relié à plusieurs timers. C'est en réalité la fréquence des bus (`APB_ peripheral clock`) qui est la valeur qui sera divisée par le `prescaler` dans la configuration des timers (à ne pas confondre avec les `prescaler`s de la configuration de l'horloge).

Il est donc possible de modifier la fréquence de l'horloge de chaque bus de manière indépendante en modifiant les variables `APB_ peripheral clock`, mais cela devient assez vite chaotique à gérer à cause des `prescaler`s de la configuration de l'horloge (vous pouvez essayez si vous aimez souffir). Nous conseillons de faire comme dans la vidéo : modifier **uniquement** la fréquence de l'horloge du microcontrôleur (`HCLK`), et choisir le `prescaler` de chacun des timers que vous souhaitez utiliser pour votre fréquence de comptage.

> [!TIP]
> Puisque les timers d'un microcontrôleur STM32 peuvent avoir des spécificités différentes, il est conseillé regarder la [datasheet](https://www.st.com/resource/en/datasheet/stm32l432kc.pdf) pour choisir vos timers.

Maintenant que vous savez ce qu'est un timer, et comment le manipuler, nous verrons comment l'utiliser pour générer des signaux PWM.


## Signal PWM simple

Voici une vidéo qui explique très bien comment générer des signaux PWM avec un microcontrôleur STM32.

<iframe width="100%" height="415" src="https://www.youtube.com/embed/AjN58ceQaF4?si=QPCLBDvGKuvLXI2D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Il y a quelques points à ajouter à cette vidéo.

La première chose est qu'il est possible de modifier les valeurs de `prescaler`, `counter period` et `pulse` directement dans le code. Les fonctions sont respectivement `__HAL_TIM_SET_PRESCALER()`, `__HAL_TIM_SET_AUTORELOAD()` et `__HAL_TIM_SET_COMPARE()`.

- La deuxième chose est que certains channels sont suivis d'un suffixe "N" (ex. `PWM Generation CH2N`). Il s'agit de sorties complémentées, c'est-à-dire que le `pulse` définit la période à l'état BAS, et non à l'état HAUT comme pour les channels classiques. Ainsi, le rapport cyclique y est inversé. Pour lancer un PWM sur un tel channel, on utilise plutôt `HAL_TIMEx_PWMN_Start()`.

- La troisième : on peut bien sûr arrêter un signal PWM avec `HAL_TIM_PWM_Stop()` pour les channels normaux et `HAL_TIMEx_PWMN_Stop()` pour les channes complémentés.

- ENfin la quatrième : le microcontrôleur que nous utilisons (Nucleo L432KC) n'a pas de broches pour activer un mode "téléversement" et un mode "lancement".

## Signal PWM avec interruptions



## Signal PWM avec DMA

## Paramétrage de la carte

Avant de régler le timer, il faut configurer la clock que va utiliser le timer (menu `Clock Configuration`).
Ici, on utilise le timer `TIM1` qui est sur le bus `APB2` et qui a une fréquence de 4MHz :
<img src="/images/Info/PWM/clock_config.webp" alt="Prescaler clock">

> [!TIP]
> Pour trouver quelle clock le timer utilise, il faut regarder la [datasheet](https://www.st.com/resource/en/datasheet/stm32l432kc.pdf) du microcontrôleur, dans la section `Memory mapping` (ici, page 60).


Ensuite, on peut régler le timer TIM1 qu'on utilisera pour générer le signal PWM.
Ici, l'objectif était d'avoir trois signaux, d'où le mode PWM sur 3 channels :
<img src="/images/Info/PWM/timer_config.webp" alt="TIM1">

Il est aussi nécessaire de calculer la valeur du prescaler à partir de la clock (4MHz),
du compteur utilisé (4096) et de la fréquence voulue (50Hz) : `4MHz ÷ (4096*50Hz) - 1 = 18`.

## Génération du signal

Pour commencer la génération du signal, il faut utiliser la fonction `HAL_TIM_PWM_Start` :

```c
// htim1 et TIM_CHANNEL_X sont automatiquement générés par CubeMX
HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_1);
HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_2);
HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_3);
```

Maintenant que le signal est généré, il est possible de modifier le compte de chaque channel :

```c
htim1.Instance->CCR1 = 205; // Channel 1
htim1.Instance->CCR2 = 410; // Channel 2
htim1.Instance->CCR3 = 615; // Channel 3
```

Enfin, pour arrêter la génération du signal, il faut utiliser la fonction `HAL_TIM_PWM_Stop` :

```c
HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_1);
HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_2);
HAL_TIM_PWM_Stop(&htim1, TIM_CHANNEL_3);
```