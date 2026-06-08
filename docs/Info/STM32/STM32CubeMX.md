---
title: Utilisation de STM32CubeMX
description: Comment créer et configurer une carte avec CubeMX
---

# Utilisation de STM32CubeMX

**STM32CubeMX** est l'interface graphique permettant de sélectionner la carte utilisée et configurer les différentes broches. Quel que soit l'IDE que vous choisirez, il faudra forcément installer STM32CubeMX pour la configuration des broches de votre STM32.

## Installation

Autrefois intégré à l'environnement de développement de STM32CubeIDE, **STM32CubeMX** est désormais à installer à part.

Pour cela, rendez-vous sur [la page officielle de STM Electronics](https://www.st.com/en/development-tools/stm32cubemx.html) pour télécharger la version correspondant à votre système d'exploitation. Le processus requiert (malheureusement) de donner nom, prénom et email.


## Créer un nouveau fichier `.ioc`

La première étape dans un projet STM32 est de créer le fichier `.ioc` avec **STM32CubeMX**, afin de configurer votre carte STM32.

### Page d'accueil

Sur la page d'accueil de CubeMX, sélectionnez `File` dans l'onglet en haut, puis `New project` pour créer un nouveau projet (ou `Load project` pour en ouvrir un existant).

![nouveau projet](/images/Info/STM32/cubemx/new_project.webp)
*Page d'accueil STM32CubeMX*

Après un petit instant de téléchargement, vous arrivez sur l'interface de sélection de votre carte.


### Sélection de la carte

L'onglet `MCU/MPU selector` permet de rechercher une **puce** STM spécifique, tandis que l'onglet `Board selector` recherche plutôt un **microcontroleur (carte)** STM. En fait, chaque microcontroleur utilise une puce spécifique, mais toutes les puces ne sont pas utilisées par des microcontroleurs (vous suivez?). Par exemple, le microcontroleur **NUCLEO-L432KC** utilise la puce **STM32L432KCU3**.

Nous vous préconisons d'utiliser l'onglet `Board selector`, afin d'obtenir certaines configuration par défaut de la puce de votre carte STM. Sélectionnez donc l'onglet `Board` et entrez le nom de votre carte STM32 (par exemple NUCLEO-L432KC) dans le champ `Commerical Part Number`. Cette dernière devrait apparaître comme dans l'image ci-dessous :

![Sélection de la carte](/images/Info/STM32/cubemx/board_selector.webp)
*Board selector*

Cliquez dessus, et acceptez l'initialisation par défaut des broches (vous pourrez les modifier plus tard si vous le souhaitez).


### Interface de configuation des broches

Vous tombez maintenant sur l'interface de configuration des broches de la puce de votre microcontroleur. Il permet de configurer :

- Les broches entrées - sorties
- Les horloges (`Clock Configuration`)
- Les timers (génération de [PWM](/Info/PWM/STM32.md) par exemple)
- Les connectivités (UART, SPI, I2C, CAN, USB, ...)
- Les fonctionnalités (interrupts, DMA, ...)
- etc.

![Configuration de la carte](/images/Info/STM32/cubemx/board_config.webp)
*Interface de configuration de la carte*

> [!WARNING]
> Les noms des broches de la puce (affichés sur l'interface de CubeMX) ne sont pas les mêmes que les broches du microcontroleur ! Il y a une correspondance donnée par le PINOUT DATASHEET de votre microcontroleur.

### Gestionnaire de projet et génération du code

Une fois la configuration terminée, rendez-vous dans l'onglet `Project Manager`. Entrez le nom de votre projet, puis sélectionnez le dossier dans lequel vous le placer. Ce dossier doit avoir le même nom que votre projet, pour être facilement identifiable. Par ailleurs, si vous utilisez **STM32CubeIDE**, il est préférable que le dossier se trouve dans votre Workspace, mais ce n'est pas obligatoire.

Vient ensuite le choix de la `Toolchain / IDE`. C'est ici que vous déciderez de l'IDE que vous souhaitez utiliser. Si vous voulez utiliser **STM32CubeIDE** (l'IDE basé sur Eclipse), choisissez `STM32CubeIDE`. Et si vous préférez utiliser **VSCode**, choisissez `Cmake`.

Cliquez enfin sur `Generate code` qui génère le code nécessaire à la bonne configuration de la carte (retrouvable dans `Core/Src/main.c` et `Core/Inc/main.h`), ainsi que d'autres fichiers spécifiques à l'IDE choisi.

![Gestionnaire de projet](/images/Info/STM32/cubemx/project_manager.webp)

Et voilà.