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

- La première chose est qu'il est possible de modifier les valeurs de `prescaler`, `counter period` et `pulse` directement dans le code. Les fonctions sont respectivement `__HAL_TIM_SET_PRESCALER()`, `__HAL_TIM_SET_AUTORELOAD()` et `__HAL_TIM_SET_COMPARE()`.

- La deuxième chose est que certains channels sont suivis d'un suffixe "N" (ex. `PWM Generation CH2N`). Il s'agit de sorties complémentées, c'est-à-dire que le `pulse` définit la période à l'état BAS, et non à l'état HAUT comme pour les channels classiques. Ainsi, le rapport cyclique y est inversé. Pour lancer un PWM sur un tel channel, on utilise plutôt `HAL_TIMEx_PWMN_Start()`.

- La troisième : on peut bien sûr arrêter un signal PWM avec `HAL_TIM_PWM_Stop()` pour les channels normaux et `HAL_TIMEx_PWMN_Stop()` pour les channes complémentés.

- Enfin la quatrième : le microcontrôleur que nous utilisons (Nucleo L432KC) n'a pas de broches pour activer un mode "téléversement" et un mode "lancement".

## Signal PWM en mode interruption

Il est possible de générer des signaux PWM avec interruptions.

Pour ce faire, il faut d'abord activer le mode interruption du timer dans l'onglet `NVIC Settings` au niveau du fichier `.ioc`.

<img src="/images/Info/PWM/pwm_it_config.webp" alt="DMA config">

Puis, au niveau du code, on lance le signal PWM en mode IT `HAL_TIM_PWM_Start_IT()`. Il faudra ensuite définir le contenu de la fonction exécutée à chaque interruption `HAL_TIM_PWM_PulseFinishedCallback()`.


## Signal PWM avec DMA

La génération d'un signal PWM en mode **DMA** (Direct Access Memory) consiste à modifier le duty cycle du signal PWM  à chaque fin de période. Pour ce faire, chaque valeur du CCR (la période à l'état haut) est renseignée dans un tableau, et à chaque fin d'impulsion du signal, la valeur suivante est chargée. On obtient donc un signal PWM à duty cycle variable.

Pour ce faire, on active le mode DMA dans l'onglet `DMA Settings` dans le fichier `.ioc`.

<img src="/images/Info/PWM/pwm_dma_config.webp" alt="DMA config">

Il y a deux modes :

- **normal** : Une fois arrivé à la fin du tableau, la génération du signal s'arrête.
- **circular** : Une fois arrivé à la fin du tableau, on reprend du début du tableau.

Niveau code, il suffit de définir un tableau de `unit16_t`, donner la valeur de chaque CCR dans le tableau, et appeler la fonction `HAL_TIM_PWM_Start_DMA()`. Voici un exemple assez parlant, extrait du site [Controllerstech](https://controllerstech.com/pwm-in-stm32/) très explicatif, avec un `ARR = 100` :

```c
uint16_t pwmData[11];
pwmData[0] = 10; pwmData[1] = 20; pwmData[2] = 30;
pwmData[3] = 40; pwmData[4] = 50; pwmData[5] = 60;
pwmData[6] = 70; pwmData[7] = 80; pwmData[8] = 90;
pwmData[9] = 100;pwmData[10] = 0;
HAL_TIM_PWM_Start_DMA(&htim1, TIM_CHANNEL_1, (uint32_t *)pwmData, 11);
```