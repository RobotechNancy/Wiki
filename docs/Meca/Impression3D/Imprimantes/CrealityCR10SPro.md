---
author: mawa2005
contributor: NoAccount1
---

# Creality CR-10S Pro

Ce tutoriel détaille l'**utilisation de la Creality CR-10S Pro** à l'aide de Cura et le **changement de bobines**

Dans ce tutoriel nous vous expliquerons comment est-il possible de lancer des impressions à l’aide de l’imprimante Creality CR10S-pro ainsi que comment changer la bobine.

## Logiciel

Le logiciel utilisé dans ce tutoriel est [UltiMake Cura](https://ultimaker.com/software/ultimaker-cura/)

::: details Autres slicers compatibles
Ce tutoriel ne concerne pas ces slicers, mais ils fonctionnent aussi si vous savez ce que vous faites

- [Creality Print](https://www.creality.com/download)
- [PrusaSlicer](https://github.com/prusa3d/PrusaSlicer/releases)
- [OrcaSlicer](https://github.com/OrcaSlicer/orcaslicer/releases)
  :::

## Ajouter une imprimante

> [!tip]
> Cette opération se fait une seule fois lors du premier lancement de Cura

Sélectionner `Non UltiMaker printer`

<Image src="/images/Meca/Impression3D/Cura_AddPrinter.png" alt="Ajouter une imprimante non-Ultimaker" showAlt="true" width="75%" />

Clicker sur `Add a non-network printer` et chercher `Creality CR1-0S Pro`

<Image src="/images/Meca/Impression3D/Cura_AddPrinterSearch.png" alt="Chercher Creality CR-10S Pro" showAlt="true" width="75%" />

::: details Si le setup initial a déjà été fait
Dans la barre d'action, ouvrir `Preferences/Configure Cura...`

<Image src="/images/Meca/Impression3D/Cura_ActionBar.png" alt="La barre d'action" showAlt="true" />

Sélectionner `Printers` puis `Add New`
:::

Le logiciel vous donne ainsi les paramètres recommandés de la machine. il n’est pas nécessaire de les modifier excepté si vous savez ce que vous faites.

Vérifiez tout de même que les informations sont identiques à celles-ci

| <Image src="/images/Meca/Impression3D/Cura_DefaultSettings1.png" alt="Paramètres par défaut - Page 'Printer'" /> | <Image src="/images/Meca/Impression3D/Cura_DefaultSettings2.png" alt="Paramètres par défaut - Page 'Extruder 1'" /> |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |

Dans la barre d'action, ouvrir `Preferences/Configure Cura...`

<Image src="/images/Meca/Impression3D/Cura_ActionBar.png" alt="La barre d'action" showAlt="true" />

Sélectionner `Profiles` puis `Import`<br>
Ou presser `Ctrl + J` pour ouvrir les paramètres de profils

Charger le profile Cura suivant
<file src="/Wiki/Profile_Creality_CR10S_Pro.curaprofile">Profile Creality CR-10S Pro</file>

## Lancer une impression

Sélectionner le type de filament (probablement `Chromatik PLA`)

<Image src="/images/Meca/Impression3D/Cura_SelectFilament.png" alt="Sélection du matériau" showAlt="true" />

Sélectionner le profil adapté dans `Print settings`

<Image src="/images/Meca/Impression3D/Cura_ProfileSelect.png" alt="Sélection du matériau" showAlt="true" />

> [!tip]
>
> <div style="display: flex; flex-direction: row;"> <div>Cette imprimante ne nécessite pas de "Raft", càd le support plat que vous pouvez trouvez en dessous des impressions (ex : avec les impressions sur Z-Suite qui en ont besoin).<br><br>Mais si cela s’annonce nécessaire dû à une pièce grande en hauteur et fine, il sera peut être nécessaire d’en mettre un.<br>Pour se faire, afficher les options avancées, puis le sélectionner dans <code>Build Plate Adhesion</code></div><div><Image src="/images/Meca/Impression3D/Cura_Raft.png" alt="Activer le Raft dans les paramètres avancés" /></div> </div>

Importer la pièce au format `.stl`

<Image src="/images/Meca/Impression3D/Cura_ImportSTL.png" alt="Bouton d'importation d'un fichier dans Cura" showAlt="true" />

> [!tip]
>
> - Clique droit pour tourner la vue
> - Scroll pour zoomer/dézoomer
> - Clique molette pour se déplacer dans la vue

Il est nécéssaire de faire le **plus de contact possible** entre la pièce et le plateau de l'imprimante afin de **minimiser l'usage de support**

Une fois la pièce placée correctement, cliquez sur `Slice` en bas à droite de la fenêtre. Ainsi vous enregistrez le fichier de paramétrage d’impression de la pièce.
Vous pouvez voir un aperçu en cliquant sur “Preview” en haut de la fenêtre.
<Image src="/images/Meca/Impression3D/Cura_SliceButton.png" alt="Bouton slice pour préparer la pièce" showAlt />

Pour enregistrer le fichier pour l’imprimante il vous faudra une **carte microSD**
<Image src="/images/Meca/Impression3D/Creality_SDCard.jpg" alt="Carte SD dans son adaptateur" showAlt width="75%" />

<Div>
<p>Celle-ci est situé sur le côté</p>
<Image src="/images/Meca/Impression3D/Creality_SDCardLocation.jpg" alt="Emplacement de la carte SD" width="50%"/>
</Div>

> [!danger] ATTENTION
> le nom du fichier export sur la clé ne doit pas dépasser **16 caractères** !<br>
> Sinon l’imprimante ne le détectera pas. [[source]](https://www.facebook.com/groups/323216258617076/posts/1908562576749095/)

Allumer l’imprimante : appuyez sur `Print`, puis sélectionnez le fichier dans la liste qui apparaît à l’écran (Rappel : si le fichier n’apparaît pas, c probablement dû à un trop long nom de fichier).
<Image src="/images/Meca/Impression3D/Creality_MenuPrint.jpg" alt="Acceuil Creality - Touche 'Print' sélectionnée" width="75%" showAlt />

Une fois l’impression lancée, l’imprimante va s’étalonner

## Changer la bobine

> [!tip]
> Cette étape se déroule directement sur l’imprimante, pas besoin du logiciel.

Pour retirer le fil charger, aller dans `Settings`, dedans vous aures plusieurs choix dont l’icône `Refuel`, cliquez dessus.
<Image src="/images/Meca/Impression3D/Creality_MenuSettings.jpg" alt="Acceuil Creality - Touche 'Settings' sélectionnée" width="75%" showAlt/>

Vous pourrez ainsi retirer du fil petit à petit (`Retreat`)

Une fois le fil retiré, chargez en un nouveau en le faisant passer par ces deux endroits :

<Div>
<Image src="/images/Meca/Impression3D/Creality_PrintFeed.jpg" alt="Acceuil Creality - Touche 'Settings' sélectionnée" width="30%" />
<p style="align-self: center;">et</p>
<Image src="/images/Meca/Impression3D/Creality_PrintHead.jpg" alt="Acceuil Creality - Touche 'Settings' sélectionnée" width="30%" />
</Div>

Retourner sur l’écran et cette fois-ci, faites entrer petit à petit le fil avec `Feed`.

Pour plus d'informations, demandez sur le Discord au rôle `@C&F🦾`

<!--
Pour information, les paramètres de l’imprimante sont enregistrés quand vous vous reconnectez, l’étape qui suit ne se fait normalement qu’une seule fois.

Pour pouvoir obtenir les paramètres de l’imprimante, rdv dans la “configuration setting visibility” dans “settings”.

Vous aurez cette fenêtre qui s’ouvre :

Cliquez sur la catégorie “Printers” : Cliquez sur Add New.

Cliquez ensuite sur “Ultimaker printer”

Puis “Add local printer”.

“Add a non-networked printer”

Enfin, vous arriverez sur cette fenêtre, scroller jusqu’à trouver “Creality3D”, ouvrez le menu déroulant et sélectionnez CR-10S Pro et “Add”

Le logiciel vous donne ainsi les paramètres de la machine, il n’est pas nécessaire de les modifier à part si ça vous chante, mais c’est déjà les paramètres optimisés pour la machine. Vérifiez tout de même que les informations sont identiques à celles-ci :

Ainsi vous aurez les paramètres de l’imprimante, vous pouvez les sélectionnées dans ce menu déroulant :

Pour le matériel, sélectionnez “Chromatik PLA”.

Enfin pour les paramètres, il vous faudra importer le fichier “Profile-creality.curaprofile” mis sur le drive. Pour cela, retournez dans cette fenêtre et cliquez sur “Import” :

Sélectionnez le fichier Profile-creality télécharger depuis le drive.

Vous pourrez ensuite le sélectionner dans les Print settings.

Pour information, cette imprimante ne nécessite pas de “Raft”, càd le support plat que vous pouvez trouvez en dessous des impressions (ex : avec les impressions sur Z-Suite qui en ont besoin pour être bonne). Mais si cela s’annonce nécessaire dû à une pièce grande en hauteur et fine, il sera peut être nécessaire d’en mettre un. Pour se faire, aller l’activer dans “build plate adhesion” :

Pour importer une pièce, vous devez l’avoir exportée en format .stl. Cliquez sur l’icône ci dessou :

Vous accéderez à la bibliothèque de votre PC ainsi.
Une fois la pièce importée, comme sur Z-suite, vous pourrez la tourner et la déplacer sur le plateau de la manière que vous souhaitiez. Je vous conseille de faire le plus de contact possible avec le plateau, mais aussi de prendre en compte le retirage de support.

Aussi, il est important de noter qu’il faut :
Clique droit pour tourner la vue
Scroll pour zoomer/dézoomer
Clique molette pour se déplacer dans la vue

Une fois la pièce placée correctement, cliquez sur “slice” en bas à droite de la fenêtre. Ainsi vous enregistrez le fichier de paramétrage d’impression de la pièce.
Vous pouvez voir un aperçu en cliquant sur “Preview” en haut de la fenêtre.

Pour enregistrer le fichier pour l’imprimante il vous faudra la carte microSD de l’imprimante.

Celle-ci est situé sur le côté :

Mettez la ensuite dans la clé Usb de la même manière que pour l’imprimante Zortax :

ATTENTION : le nom du fichier export sur la clé ne doit pas dépasser un certain nombre de caractères ! Sinon l’imprimante ne le détectera pas.

Une fois exportée, retirer la carteSD de la clé et remettez là dans l’imprimante.

Allumer l’imprimante : appuyez sur print : puis sélectionnez le fichier dans la liste qui apparaît à l’écran (Rappel : si le fichier n’apparaît pas, c probablement dû à un trop long nom de fichier).

Une fois l’impression lancée, l’imprimante va s’étalonner

Changement de bobine

Cela se fera directement sur l’imprimante, pas besoin du logiciel.

Pour retirer le fil charger, aller dans settings, dedans vous aures plusieurs choix dont l’icône “refuel”, cliquez dessus.

Vous pourrez ainsi retirer du fil petit à petit (“retreat”)

Une fois le fil retirer, Charger en un nouveau en le faisant passer par ces deux endroits :

        et

Retourner sur l’écran et cette fois-ci, faites entrer petit à petit le fil avec “feed”.

C’est tout pour ce Tutoriel. Si vous avez des questions, n’hésitez pas à nous les posez sur le discord de Robotech.
-->
