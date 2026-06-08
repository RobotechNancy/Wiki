---
title: Utilisation de STM32CubeIDE
description: Utilisation de STM32CubeIDE
---

# Utilisation de STM32CubeIDE

C'est l'IDE le plus simple pour développer sur STM32 (même si l'interface semble indimidante). Lancé en 2015 et basé sur Eclipse, cet IDE permet de rédiger, compiler et débuger du code sur la STM32. Il offre un environnement prêt à l'emploi, idéal pour débuter.


## Installation

Pour le télécharger, il faut se rendre sur [la page officielle de STM Electronics](https://www.st.com/en/development-tools/stm32cubeide.html). Nom, prénom et adresse mail sont toujours demandés. Vous sélectionnez votre OS et le fichier d'installation sera envoyé à l'adresse mail renseignée. Il suffit de le télécharger, l'exécuter et de suivre le processus d'installation.

Sur Linux, c'est un script `bash` qui est téléchargé. Donc il faudra l'exécuter avec `bash nom_fichier.sh`.

> [!TIP]
> Si vous utilisez `flatpak` sur Linux : `flatpak install flathub com.st.STM32CubeIDE`
> (ne nécessite pas de donner son email, nom et prénom).


## Présentation de l'IDE

### Choix du workspace

Lorsque vous ouvrez l'IDE, la première fenêtre qui s'affiche vous demande de sélectionner votre Workspace. Un **Workspace** est un dossier où résident plusieurs projets STM32. Cela permet d'isoler les projets les uns des autres, et de les organiser.

### Interface

Voici à quoi ressemble l'interface :

![Interface STM32CubeIDE annotée](/images/Info/STM32/cubeide/stm32_interface_annoted.webp)
*Interface STM32CubeIDE annotée*

- **Explorateur de projet (1)** : La zone de navigation entre les projets de votre workspace, et leurs fichiers respectifs.
- **Zone d'édition du code (2)** : La zone où vous éditerez vos différents fichiers.
- **Side panel (3)** : La zone où s'affiche l'ensemble des inclusions, des define, des variables, des fonctions, etc. du fichier en cours d'édition. C'est aussi là que s'affichera la liste des variables dans le mode Debug.
- **Console (4)** : La console. Elle log le processus de build et les erreurs. Attention, elle n'affiche pas les `printf()`.
- **Build** : Permet de compiler le projet. La carte n'a pas besoins d'être connectée via USB.
- **Debug** : Compile et execute le programme en mode debug. La carte doit être connectée via USB.
- **Run** : Compile et flash le programme dans la mémoire de la carte. Cette dernière l'exécute dès qu'elle est alimentée.

## Créer/Importer un projet

Pour créer un nouveau projet, nous vous recommandons de créer d'abord le fichier `.ioc`, puis d'importer le dossier dans l'IDE.

Pour ce faire, il vous suffit de cliquer sur l'onglet `File` tout en haut, puis `STM32 Project Create/Import`.

<img src="/images/Info/STM32/cubeide/new_project.webp" alt="Nouveau projet">

Sur le menu qui apparaît, rendez vous dans la section `Import STM32 Project` et sélectionnez `STM32CubeMX/STM32CubeIDE project` et cliquez sur `Next`.

<img src="/images/Info/STM32/cubeide/import.webp" alt="Import">

Sélectionnez enfin, au niveau de la section `Import source`, le dossier dans lequel se trouve votre fichier `.ioc`, et cliquez sur `Finish`.

<img src="/images/Info/STM32/cubeide/choose_folder.webp" alt="Import">

Et le tour est joué.