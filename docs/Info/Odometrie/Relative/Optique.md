---
title: Capteur optique
description: Documentation sur le capteur optique
---

# Capteur optique

Un capteur optique est placé sous le robot
<img src="/images/optic_sensor/PMW3901.webp" alt="PMW3901">
Il permet de mesurer le déplacement du robot par rapport au sol. Il s'agit d'une caméra à basse résolution et haute fréquence qui compare des images successives du sol.

## Utilisation

Pour fonctionner correctement, le capteur optique doit se situer à minimum 9cm du sol, et avoir un éclairage adapté.
Il est pour cela accompagné d'un anneau de LEDs WS2812
<img src="/images/optic_sensor/LED.webp" alt="WS2812">
ce sont des LED commandables individuellement en 24 bits (1 octet par composante RGB).

On envoie à la suite les trames pour chaque LED selon le schéma suivant :

<img src="/images/optic_sensor/command.webp" alt="Commande WS2812">

## Configuration STM

`Clock configuration` : 80MHz

`Pinout & Configuration` :

`Timers` : TIM1

Choisir un channel, sélectionner `internal clock` en `Clock source`

`Parameter Settings` :

- Prescaler 0
- Counter Mode Up
- Counter Period 95
- Internal Cloc... No Division
- Repetition Co... 0
- auto-reload p... Disable

`DMA Settings` :

- Direction : Memory to Peripheral
- Priority : Very High

`Increment Address` :

- [ ] Peripheral :
- [x] Memory :

`Data Width` :

- Peripheral : Word
- Memory : Word
