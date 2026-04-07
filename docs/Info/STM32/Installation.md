---
title: Installation
description: Comment installer les outils de développement pour STM32
---

# Introduction

Le développement sur STM32 nécessite deux logiciels principaux:
- [STMCubeMX](https://www.st.com/en/development-tools/stm32cubemx.html) : L'interface graphique permettant de sélectionner la carte utilisée et configurer les différentes broches.
- Un IDE : Soit [STM32CubeIDE](https://www.st.com/en/development-tools/stm32cubeide.html) (un IDE basé sur Eclipse), soit VSCode avec l'extension [STM32CubeIDE for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=stmicroelectronics.stm32-vscode-extension).

# STM32CubeMX

<img src="/images/Info/STM32/cubemx_loading.png" alt="STM32CubeMX">

Autrefois intégré à l'environnement de développement de STM32, **STM32CubeMX** est désormais à installer à part. Donc, quel que soit l'IDE que vous choisirez, il faudra forcément installer STM32CubeMX pour la configuration des broches de votre STM.

Pour cela, rendez-vous sur [le site officiel de STM Electronics](https://www.st.com/en/development-tools/stm32cubemx.html) pour télécharger la version correspondant à votre système d'exploitation. Le processus requiert (malheureusement) de donner nom, prénom et email.

# Installation de l'IDE

## - STM32CubeIDE

<img src="/images/Info/STM32/cubeide_loading.png" alt="STM32CubeIDE">

C'est, dans une certaine mesure, la manière la plus facile de développer sur STM32 (même si sa prise en main est fastidieuse). Lancé en 2015 et basé sur Eclipse, cet IDE permet de rédiger, compiler et débuger du code sur la STM32.

Pour le télécharger, il faut se rendre sur de nouveau sur [le site officiel de STM Electronics](https://www.st.com/en/development-tools/stm32cubeide.html). Nom, prénom et adresse mail sont toujours demandés. Un fichier d'installation sera téléchargé, et il suffit de l'exécuter et de suivre les instructions.
Sur Linux, il est possible que le fichier d'installation ne soit pas exécutable, il faut alors le rendre exécutable avec `chmod +x nom_fichier`.

> [!TIP]
> Si vous utilisez `flatpak` sur Linux : `flatpak install flathub com.st.STM32CubeIDE`
> (ne nécessite pas de donner son email, nom et prénom).

## - STM32CubeIDE for Visual Studio Code

<img src="/images/Info/STM32/cubeidevscode.png" alt="STM32CubeIDE">

C'est la dernière nouveauté ! Il s'agit d'une extension de VSCode qui permet d'obtenir les mêmes fonctionnalités que STM32CubeIDE tout en restant sur VSCode (qui est bien plus aisé à prendre en main).

Le processus d'installation est décrit dans la vidéo ci-dessous :

<iframe width="560" height="315" src="https://www.youtube.com/embed/aWMni01XGeI?si=m5Mq_7PvVh-Peddk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

> [!WARNING]
> Si vous n'arrivez pas à exécuter votre `main.c` comme dans la vidéo, il faudra renseigner les chemins de tous les fichiers `.c` que vous avez créé  > le fichier `CMakeLists.txt` qui est à la racine de votre projet.