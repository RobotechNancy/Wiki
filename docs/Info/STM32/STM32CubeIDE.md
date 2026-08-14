---
title: Utilisation de STM32CubeIDE
description: Utilisation de STM32CubeIDE
---

# Utilisation de STM32CubeIDE

C'est l'IDE le plus simple pour développer sur STM32. Lancé en 2015 et basé sur Eclipse, cet IDE permet de rédiger, compiler et débuger du code sur la STM32. Il offre un environnement prêt à l'emploi, idéal pour débuter. **Nous le recommandons fortement,** même si l'interface semble indimidante.


## Installation

Pour le télécharger, il faut se rendre sur [la page officielle de STM Electronics](https://www.st.com/en/development-tools/stm32cubeide.html). Comme avec [STM32CubeMX](/Info/STM32/STM32CubeIDE), l'adresse email est demandée. Vous sélectionnez votre OS et le fichier d'installation sera envoyé à l'adresse mail renseignée. Il suffit de le télécharger, l'exécuter et de suivre le processus d'installation.

Sur Linux, c'est un script `bash` qui est téléchargé. Donc il faudra l'exécuter avec : 

```bash
bash nom_fichier.sh
```

> [!TIP]
> Si vous utilisez `flatpak` sur Linux : `flatpak install flathub com.st.STM32CubeIDE`
> (ne nécessite pas de donner son email, nom et prénom).


## Présentation de l'IDE

### Choix du workspace

Lorsque vous ouvrez l'IDE, la première fenêtre qui s'affiche vous demande de sélectionner votre Workspace. Un **Workspace** est un dossier où résident plusieurs projets STM32. Cela permet d'isoler les projets les uns des autres, et de les organiser.

![Choix du workspace](/images/Info/STM32/cubeide/cubeide_workspace.webp)

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

Nous vous recommandons de créer d'abord le fichier `.ioc`. Le processus de création se trouve [ici](/Info/STM32/STM32CubeMX#creer-un-nouveau-fichier-ioc).  Le projet créé sera ensuite importé dans l'IDE.

### 1. 

Cliquez sur l'onglet `File` tout en haut, puis `STM32 Project Create/Import`.

<img src="/images/Info/STM32/cubeide/new_project.webp" alt="Nouveau projet">

### 2.

Sur le menu qui apparaît, rendez vous dans la section `Import STM32 Project` et sélectionnez `STM32 Cmake project` et cliquez sur `Next`.

<img src="/images/Info/STM32/cubeide/cubeide_import_cmake.webp" alt="Import">

### 3.

Sur la nouvelle fenêtre, renseignez le nom du projet, le même nom que le projet créé avec CubeMX. Il faudra ensuite décocher la case `Use default location` afin de sélectionner le chemin d'accès du projet au niveau de `Location` (`Source location` se remplira automatiquement). Cliquez de nouveau sur `Next`.

<img src="/images/Info/STM32/cubeide/cubeide_cmake_location.webp" alt="Project location">

### 4.

Sur cette nouvelle fênetre, renseignez la puce utilisé par votre microcontrôleur (ex. STM32L432KCUx).

<img src="/images/Info/STM32/cubeide/cubeide_chip_selector.webp" alt="Chip selector">

Cliquez enfin sur `Finish` pour finaliser l'import.

Et voilà. Le projet est importé.


> [!NOTE]
> Il se peut qu'une fois le projet importé, un message d'avertissement s'affiche en bas, dans l'onglet `Problems` :
> <img src="/images/Info/STM32/cubeide/encoding_warning.webp" alt="Project location">
> Pour le corriger : clic droit sur le projet, puis `Properties` -> `Resource` -> `Text file encoding` -> `Other: UTF-8`.