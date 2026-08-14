---
title: Utilisation de STM32CubeMX
description: Comment créer et configurer une carte avec CubeMX
---

# Utilisation de STM32CubeMX

**STM32CubeMX** est l'interface graphique permettant de sélectionner la carte utilisée et configurer les différentes broches. Quel que soit l'IDE que vous choisirez, il faudra forcément installer STM32CubeMX pour la configuration des broches de votre STM32.

## Installation

Autrefois intégré à l'environnement de développement de STM32CubeIDE, **STM32CubeMX** est désormais à installer à part.

Pour cela, rendez-vous sur [la page officielle de STM Electronics](https://www.st.com/en/development-tools/stm32cubemx.html) pour sélectionner la version correspondant à votre système d'exploitation.

![Page de telechargement](/images/Info/STM32/cubemx/download_cubemx.webp)
*Page de téléchargement STM32CubeMX*

Il est ensuite demander de créer un compte ST ou de continuer en tant qu'invité (juste une adresse mail). À vous de voir.

Un fois le compte créé (ou l'adresse mail renseignée en tant qu'invité), un mail est envoyé, contenant un lien qui télécharge un dossier zip contenant le fichier de setup. Il suffit alors de le décompresser, de lancer le fichier de setup et de suivre les étapes.


## Créer un nouveau fichier `.ioc`

La première étape dans un projet STM32 est de créer le fichier `.ioc` avec **STM32CubeMX**, afin de configurer votre carte STM32.

### 1. Page d'accueil

Sur la page d'accueil de CubeMX, sélectionnez `File` dans l'onglet en haut, puis `New project` pour créer un nouveau projet (ou `Load project` pour en ouvrir un existant).

![Page d'accueil STM32CubeMX](/images/Info/STM32/cubemx/new_project.webp)
*Page d'accueil STM32CubeMX*

Après un petit instant de téléchargement, vous arrivez sur l'interface de sélection de votre carte.


### 2. Sélection de la carte

L'onglet `MCU/MPU selector` permet de rechercher une **puce** STM spécifique, tandis que l'onglet `Board selector` recherche plutôt un **microcontrôleur (carte)** STM. En fait, chaque microcontrôleur utilise une puce spécifique, mais toutes les puces ne sont pas utilisées par des microcontrôleurs (vous suivez?). Par exemple, le microcontrôleur **NUCLEO-L432KC** utilise la puce **STM32L432KCU3**.

Nous vous préconisons d'utiliser l'onglet `Board selector`, afin d'obtenir certaines configuration par défaut de la puce de votre carte STM. Sélectionnez donc l'onglet `Board` et entrez le nom de votre carte STM32 (par exemple NUCLEO-L432KC) dans le champ `Commerical Part Number`. Cette dernière devrait apparaître comme dans l'image ci-dessous :

![Sélection de la carte](/images/Info/STM32/cubemx/board_selector.webp)
*Board selector*

Cliquez dessus.

Une fenêtre s'ouvre, avec la liste des configurations de pin par défaut. Dans le cas de l'exemple ci-dessous, il ne s'agit que de la broche `LED3`. Vous pouvez accepter vous le souhaitez et modifier plus tard. Il y a également la possibilité de générer un code d'exemple.

![Config par défaut](/images/Info/STM32/cubemx/board_default_config.webp)


### 3. Interface de configuation des broches

Vous tombez maintenant sur l'interface de configuration des broches de la puce de votre microcontrôleur. Il permet de configurer :

- Les broches entrées - sorties
- Les horloges (`Clock Configuration`)
- Les timers (génération de [PWM](/Info/PWM/STM32.md) par exemple)
- Les connectivités (UART, SPI, I2C, CAN, USB, ...)
- Les fonctionnalités (interrupts, DMA, ...)
- etc.

![Configuration de la carte](/images/Info/STM32/cubemx/board_config.webp)
*Interface de configuration de la carte*

> [!WARNING]
> Les noms des broches de la puce (affichés sur l'interface de CubeMX) ne sont pas les mêmes que les broches du microcontrôleur ! Il y a une correspondance donnée par le PINOUT DATASHEET de votre microcontrôleur.

### 4. Gestionnaire de projet et génération du code

Une fois la configuration terminée, rendez-vous dans l'onglet `Project Manager`. Entrez le nom de votre projet, puis sélectionnez le dossier dans lequel vous le placer. Par ailleurs, si vous utilisez **STM32CubeIDE**, il est préférable que le dossier se trouve dans votre [Workspace](/Info/STM32/STM32CubeIDE#choix-du-workspace), mais ce n'est pas obligatoire.

Pour le choix de la `Toolchain / IDE`, choisissez `Cmake`.

![Gestionnaire de projet](/images/Info/STM32/cubemx/project_settings.webp)

Cliquez enfin sur `Generate code` qui génère les fichiers de configurations ainsi que le code permettant de programmer la carte.

Et voilà.