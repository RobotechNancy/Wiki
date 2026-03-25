# Operations

Cette page détaille les configurations des différentes actions d'usinage mais **pas leur utilisation**

## Outils

Lors de la création de n'importe opération, il est nécéssaire de préciser l'outil utilisé.
> [!tip]
> Cette manipulation n'est nécéssaire que la première fois.
>
> Sélectionner l'outil directement si celui-ci est disponible suffit.

Pour cela, cliquer sur `Select...`
<img src="/images/Meca/Fusion360/Operations_ToolSelect.webp" />

Il est ensuite recommandé de créer une Libraire locale afin de réutiliser le même outil dans plusieurs usinages.

Pour cela, se rendre dans `User Libraries/Local` puis, avec un click droit sur la catégorie `Local` créer une nouvelle librairie
<img src="/images/Meca/Fusion360/Operations_CreateLibrary.webp" />

Copier le profil suivant et l'importer dans Fusion avec Click Droit + `Paste from Spreadsheet`

<img src="/images/Meca/Fusion360/Operations_PasteFromSpreasheet.webp" />
<Copy src="2mm_flat_end_mill">Copier le profil</Copy>

> [!tip]
> Le profil contient plusieurs profils de vitesse si la fraiseuse va trop vite.
>
> Il est recommandé de commencer avec une vitesse faible pour les premiers usinages
