---
title: Utilisation de l'extension STM32 pour VSCode
description: Utilisation de l'extension STM32 pour VSCode
---

# Utilisation de l'extension STM32CubeIDE for Visual Studio Code

Développée en 2025, il s'agit d'une extension de VSCode qui permet d'obtenir les mêmes fonctionnalités que STM32CubeIDE tout en restant sur VSCode (qui est bien plus aisé à prendre en main).

Si vous n'avez pas envie de développer dans l'IDE STM32, cette extension vaut vraiment le coup. Cependant, quelques soucis de configurations par-ci par-là apparaissent occasionnellement. Si cela ne vous fait pas peur, foncez !


## Installation

Le processus d'installation est décrit dans la vidéo ci-dessous :

<iframe width="100%" height="315" src="https://www.youtube.com/embed/aWMni01XGeI?si=m5Mq_7PvVh-Peddk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Créer/ Importer un projet

Comme avec STM32CubeIDE, nous vous recommandons de créer d'abord le fichier `.ioc`, puis d'ouvrir le dossier dans lequel il se trouve avec **VSCode**.

À un certain moment, vous verrez apparaître ce message dans le coin inférieur de l'interface : `Would you like to configure discovered CMake project(s) as STM32CubeIDE projects ?`. Vous devez répondre `Yes`.

<img src="/images/Info/STM32/vscode/cmake_discover.webp" alt="CMake discover">

> [!NOTE]
> Il semblerait que pour tous les autres projets comportant des CMake, l'extension vous demandera s'il peut les configurer en tant que projet STM32. Il suffira donc de refuser. Si cela vous dérange, le plus simple est de désactiver l'extension lorsque vous travaillez sur d'autres projets.

Une fois cela fait, il va falloir mettre à jour le firmware de votre microcontroleur STM32 (si ce n'est pas déjà fait). Il suffit de connecter votre carte à votre PC, puis de vous rendre dans la section `Run and debug` de VSCode (l'icône Play avec un insecte), où vous verrez un onglet `STM32CUBE DEVICES AND BOARDS`. Votre carte y apparaîtra. Cliquez sur l'icone de la flèche descendante pour la mise à jour.

<img src="/images/Info/STM32/vscode/firmware_update.webp" alt="Firware update">


>[!IMPORTANT]
> N'oubliez pas de renseigner dans le fichier `CMakelists.txt`, situé à la racine de votre projet, le chemin vers chacun des fichiers `.c` de votre projet, sans quoi, la compilation n'aboutit pas.
> <img src="/images/Info/STM32/vscode/target_source.webp" alt="Target source">

Votre environnement de développement est prêt.