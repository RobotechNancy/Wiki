# Préparation

## Création d'un Setup

Se rendre dans l'espace de travail "Manufacture"

<Image src="/images/Meca/Fusion360/Change_Workspace.webp" alt='Espace de travail "Manufacture"' showAlt />

<!-- TODO: Trouver comment ajouter une machine à la librairie pour les prochaines années -->
La première étape de la préparation consiste à créer un **setup** afin d'indiquer à Fusion360 la taille et l'emplacement du matériau brut à usiner.

| <Image src="/images/Meca/Fusion360/Button_Setup.webp" alt='Bouton "Setup"'/> | <Image src="/images/Meca/Fusion360/Setup_Tabs.webp" alt='Onglets du Setup'/> |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |

### Onglet "Setup"

#### Machine
Sélectionner une machine avec un système d'**axe YXZ**
<Image src="/images/Meca/Fusion360/Machine_YXZ_axis.webp" alt='Routeur par défaut avec axes YXZ sur la tête'/>

Si aucune machine n'est disponible, celles-ci sont disponible dans l'onglet `Fusion library/Autodesk`. Il faut sélectionner la machine `Autodesk Generic 3-axis Router`

> [!caution]
> Le système d'axe XYZ fonctionnera et ne produira aucune erreur mais va inverser tous les usinages par rapport aux coordonées de la machine

#### Setup
Sélectionner `Milling`

#### Work Coordinate System (WCS)
Si votre pièce est orientée sur Fusion360 comme elle sera fixée sur la fraiseuse, sélectionnez l'orientation `Model orientation`
<Image src="/images/Meca/Fusion360/Setup_Orientation_default.webp" alt="Boite de sélection de l'orientation du modèle"/>

Si elle doit être positionnée autrement, sélectionnez `Z axis/plane & X axis`, `Z axis/plane & Y axis` ou `X & Y axes`
<Image src="/images/Meca/Fusion360/Setup_Orientation_axis.webp" alt="Menu déroulant de sélection des types d'orientation de modèle"/>

Dans le cas d'un positionnement manuel, sélectionnez ensuite deux arrêtes ou plan qui correspondent aux axes du système de coordonnées.

> [!tip]
> Il n'est pas nécessaire que les axes aient une intersection

Sélectionnez ensuite l'origine du modèle. Lors de l'étalonnage de la machine, ce point correspond **au zero**.

Il est recommandé d'utiliser `Stock box point` qui correspond à un point sur le brut et non sur la pièce.
<Image src="/images/Meca/Fusion360/Setup_StockOrigin.webp" alt="Boite de sélection de l'origine du brut"/>

#### Model
Permet de sélectionner un seul modèle dans un assemblage

### Onglet "Stock"
Le "Stock" ou "Brut" en français correspond au matériau original qui sera usiné. Il est important qu'il soit correctement référencé car il sert souvent de référence pour les bords de l'usinage.

Dans la majorité des cas, le brut sera rectangulaire. Il est donc recommandé d'utiliser un brut relatif.
<Image src="/images/Meca/Fusion360/Stock_Configuration.webp" alt="Boite de sélection du type de brut"/>

Dans le cas d'un brut simple, utiliser `Add stock to sides and top-bottom`
<Image src="/images/Meca/Fusion360/Stock_AddSides.webp" alt="Section de sélection de la marge du brut sur tous les côtés en même temps"/>

Si le brut est plus complexe ou que la pièce doit être usinée sur le bord d'un brut (pour économiser des matériaux par exemple), utiliser `Add stock to all sides`
<Image src="/images/Meca/Fusion360/Stock_AllSides.webp" alt="Section de sélection de la marge du brut sur chaque côté individuellement"/>

### Onglet "Part position"
Cet onglet permet de positionner la pièce sur la machine. En pratique, lors de l'étalonnage de la fraiseuse, le zero est définit et est pris comme référence dans Fusion360. Cet onglet n'est donc pas nécessaire.

### Onglet "Post process"
Cet onglet permet de nommer le programme G-Code qui s'exportera.

> [!tip]
> Le nom et le commentaire pourront être modifiés dans une prochaine étape

Lors de l'utilisation de [Candle](/Meca/Usinage/ProverXL4030/Parametrage), il est recommandé de mettre 54 dans l'onglet `Machine WCS` (premier offset en G-Code)

## Paramétrage du post-processeur


Il faut ensuite créer un programme qui permet de contrôler la sortie de l'usinage.
<Image src="/images/Meca/Fusion360/Button_Program.webp" alt='Bouton "NC Program"' />

### Machine and post
La première à chose à faire dans cette fenêtre est de paramétrer la `Machine` et le `Post`.
<Image src="/images/Meca/Fusion360/Program_MachineAndPost.webp" alt='Section "Machine and post" de la configuration du programme' />

Pour cela, il faut importer le modèle de machine correspondant.
- Sélectionner `My machines/Local`
- Cliquer sur l'icone `Import`
    <img src="/images/Meca/Fusion360/Program_ButtonImport.webp" />
- Sélectionner le fichier `3. Divers/CNC/Genmitsu ProverXL 4030 YXZ` depuis le sélecteur de fichier


:::details [Optionel] Charger une machine depuis un fichier
Télécharger et importer le fichier **machine** ci-dessous
<file src="Genmitsu_ProveXL_4030_YXZ.f3d">Configuration machine</file>


> [!danger] ATTENTION
> Il faut ABSOLUMENT que le `Post` soit `Grbl / grbl`
> <img src="/images/Meca/Fusion360/Program_PostWrong.webp" />
> <img src="/images/Meca/Fusion360/Program_PostRight.webp" />

Si le post est `machinesimulation.cps`, éditer la machine à l'aide de l'icone correspondante
<img src="/images/Meca/Fusion360/Program_ButtonEdit.webp" alt="Bouton d'édition de la machine" />

Dans `Post processing`, ouvrir un nouveau Post processeur
<img src="/images/Meca/Fusion360/Program_PostSelector.png" alt="Bouton sélecteur de fichier" />

Vous pouvez ensuite importer le Post processeur avec deux méthodes :
- Utiliser la bibliothèque de Fusion en allant dans `Fusion library` et en important `grbl / Grbl`
- Importer manuellement le fichier suivant
    <file src="grbl.cps">Configuration Post</file>

> [!warning]
> Il peut être nécéssaire de **mettre à jour** le processeur
>
> Cliquez simplement sur la cloche indiquée d'une flèche dans l'image
> <img src="/images/Meca/Fusion360/Program_OutOfDateProcessor.webp" />
:::


:::details [Optionel] Importer une machine vierge
Se rendre dans l'onglet `Fusion library/Autodesk` puis sélectionner `Autodesk Generic 3-axis Router` puis cliquer sur l'icone Copier

Retourner dans `My machines/Local` et cliquer sur l'icone Coller

> [!warning]
> La machine Genmitsu ProverXL 4030 est de type **YXZ** lors de la sélection de la machine

:::

### Program
- `Name/number` : Permet de nommer le programme dans le fichier G-Code
- `File name` : Permet de nommer le fichier qui s'exportera
- `Comment` : Un commentaire pour les prochaines personnes qui utiliseront ce programme
- `Output folder` : Dossier dans lequel sera créé le programme avec le nom choisi précédemment
    > [!tip]
    > Il est recommandé de mettre **`C:/Fusion360_output/[Nom_du_programme]`** afin de garder le même dossier dans toutes les manufactures
    >
    > *Format utilisé depuis 2026*
- `Post to Fusion Hub` : Pas besoin ni possibilité de cocher
- `NC extension` : Décidé par le post-processeur (sera toujours `.nc` pour le GRBL)
- `Unit` : Choisir `Millimeters` ou `Document units` si le document est en millimètres
- `Open NC file in editor` : Permet d'éditer manuellement le fichier G-Code après génération

### Save in the document
- `Create NC program` : Crée ou non un programme dans le fichier Fusion360
- `Name` : Le nom du programme dans Fusion360

### Post properties
Lors de l'utilisation de la CNC, il est recommandé de sélectionner l'option `Split by toolpath` afin de pouvoir lancer chacune des actions individuellement en cas de problème
<img src="/images/Meca/Fusion360/Program_PostPropertiesSplit.webp" />

## Opérations

> [!danger]
> Lors de la validation du programme, celui ne comportera aucune action (celles-ci sont ajoutées dans la prochaine étape)
>
> Il sera nécéssaire de se rendre dans l'onglet `Operations` pour sélectionner celles qui seront exportées dans le dossier
> ![Onglet "Operations"](/images/Meca/Fusion360/Program_TabOperations.webp)
