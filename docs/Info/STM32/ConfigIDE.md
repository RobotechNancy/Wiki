---
title: Configuration de l'IDE
description: Comment configurer l'IDE choisi
---

# Configuration de l'IDE choisi

Une fois le fichier `.ioc` créé et configuré avec CubeMX, il est temps de l'importer dans votre IDE et de faire les configurations nécessaires pour commencer à programmer.


## STM32CubeIDE

Si vous avez choisi d'utiliser **STM32CubeIDE**, le processus est plutôt simple. Il vous suffit d'ouvrir l'IDE, et de cliquer sur l'onglet `File` tout en haut, puis `STM32 Project Create/Import`.

<img src="/images/Info/STM32/config_ide/new_project.png" alt="Nouveau projet">

Sur le menu qui apparaît, rendez vous dans la section `Import STM32 Project` et sélectionnez `STM32CubeMX/STM32CubeIDE project` et cliquez sur `Next`.

<img src="/images/Info/STM32/config_ide/import.png" alt="Import">

Sélectionnez enfin, au niveau de la section `Import source`, le dossier dans lequel se trouve votre fichier `.ioc`, et cliquez sur `Finish`.

<img src="/images/Info/STM32/config_ide/choose_file.png" alt="Import">

Et le tour est joué.


## Visual Studio Code

Si vous avez choisi d'utiliser l'extension `STM32CubeIDE for VSCode`, voici les étapes à suivre. Vous devez commencer par ouvrir le dossier dans lequel se trouve votre fichier `.ioc` avec **VSCode**.

À un certain moment, vous verrez apparaître ce message dans le coin inférieur de l'interface : `Would you like to configure discovered CMake project(s) as STM32CubeIDE projects ?`. Vous devez répondre `Yes`.

<img src="/images/Info/STM32/config_ide/cmake_discover.png" alt="CMake discover">

> [!TIP]
> Il semblerait que pour tous les autres projets comportant des CMake, l'extension vous demandera s'il peut les configurer en tant que projet STM32. Il suffira donc dde refuser. Si elle le fait sans demander votre avis, le plus simple est de désactiver l'extension.

Une fois cela fait, il va falloir mettre à jour le firmware de votre microcontroleur STM32 (si ce n'est pas déjà fait). Il suffit de connecter votre carte à votre PC, puis de vous rendre dans la section `Run and debug` de VSCode (l'icône Play avec un insecte), où vous verrez un onglet `STM32CUBE DEVICES AND BOARDS`. Votre carte y apparaîtra. Cliquez sur l'icone de la flèche descendante pour la mise à jour.

<img src="/images/Info/STM32/config_ide/firmware_update.png" alt="Firware update">

Enfin, la dernière étape consiste à renseigner dans le fichier `CMakelists.txt`, situé à la racine de votre projet, les chemins vers chacun des fichiers `.c` de votre projet, sans quoi, la compilation n'aboutit pas.

<img src="/images/Info/STM32/config_ide/target_source.png" alt="Firware update">

Une fois ces étapes terminées, votre environnement de développement est prêt.


