---
title: Créer le fichier `.ioc`
description: Comment créer et configurer une carte avec CubeMX
---

# Création du fichier `.ioc`

La première étape dans un projet STM32 est de créer le fichier `.ioc` avec **STM32CubeMX**, afin de configurer votre carte STM32.

## 1 - Page d'accueil
Sur la page d'accueil de CubeMX, sélectionnez `File` dans l'onglet en haut, puis `New project` pour créer un nouveau projet (ou `Load project` pour en ouvrir un existant).

<img src="/images/Info/STM32/create_project/new_project.png" alt="Nouveau projet">

Après un petit instant de téléchargement, vous arrivez sur l'interface de sélection de votre carte.


## 2 - Sélection de la carte

L'onglet `MCU/MPU selector` permet de rechercher une **puce** STM spécifique, tandis que l'onglet `Board selector` recherche plutôt un **microcontroleur (carte)** STM. En fait, chaque microcontroleur utilise une puce spécifique, mais toutes les puces ne sont pas utilisées par des microcontroleurs (vous suivez?). Par exemple, le microcontroleur **NUCLEO-L432KC** utilise la puce **STM32L432KCU3**.

Nous vous préconisons d'utiliser l'onglet `Board selector`, afin d'obtenir certaines configuration par défaut de la puce de votre carte STM. Sélectionnez donc l'onglet `Board` et entrez le nom de votre carte STM32 (par exemple NUCLEO-L432KC) dans le champ `Commerical Part Number`. Cette dernière devrait apparaître comme dans l'image ci-dessous :

<img src="/images/Info/STM32/create_project/board_selector.png" alt="Sélection de la carte">

Cliquez dessus, et acceptez l'initialisation par défaut des broches (vous pourrez les modifier plus tard si vous le souhaitez).


## 3 - Interface de configuation des broches

Vous tombez maintenant sur l'interface de configuration des broches de la puce de votre microcontroleur. Il permet de configurer :

- Les broches entrées - sorties
- Les horloges (`Clock Configuration`)
- Les timers (génération de PWM par exemple)
- Les connectivités (UART, SPI, I2C, CAN, USB, ...)
- Les fonctionnalités (interrupts, DMA, ...)
- etc.

<img src="/images/Info/STM32/create_project/board_config.png" alt="Configuration de la carte">

> [!WARNING]
> Les noms des broches de la puce (affichés sur l'interface de CubeMX) ne sont pas les mêmes que les broches du microcontroleur ! Il y a une correspondance donnée par le PINOUT DATASHEET de votre microcontroleur.

## 4 - Gestionnaire de projet et génération du code

Une fois la configuration terminée, rendez-vous dans l'onglet `Project Manager`. Entrez le nom de votre projet, puis sélectionnez le dossier dans lequel vous le placer (il doit avoir le même nom que votre projet, pour être facilement identifiable).

Vient ensuite le choix de la `Toolchain / IDE`. C'est ici que vous déciderez de l'IDE que vous souhaitez utiliser. Si vous voulez utiliser **STM32CubeIDE** (l'IDE basé sur Eclipse), choisissez `STM32CubeIDE`. Et si vous préférez utiliser **VSCode**, choisissez `Cmake`.

Cliquez enfin sur `Generate code` qui génère le code nécessaire à la bonne configuration de la carte (retrouvable dans `Core/Src/main.c` et `Core/Inc/main.h`).

<img src="/images/Info/STM32/create_project/project_manager.png" alt="Gestionnaire de projet">