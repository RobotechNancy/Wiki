# Operations

Cette page détaille les configurations des différentes actions d'usinage mais **pas leur utilisation**

## Import d'outils

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
> Le profil contient plusieurs profils de vitesse.
>
> Il est recommandé de commencer avec une vitesse faible pour les premiers usinages afin de se familiariser avec la machine.

## Fonctionnalités avancées

### Multiple depths
Quand il est nécéssaire d'usiner une pièce profondément, il est important de faire attention à la longueur de l'outils. Si celui est trop court par rapport à la profondeur de passe, il est nécéssaire d'en faire plusieurs.

Pour cela, se rendre dans l'onglet `Passes`
<img src="/images/Meca/Fusion360/Opertaions_ToolbarPasses.webp" />

Activer l'option `Multiple Depths`
<img src="/images/Meca/Fusion360/Opertaions_MultipleDepths.webp" />

### Heights
Certaines opérations ne disposent pas de la fonctionnalité `Multiple Depths` (l'opération `Flow` ou `Balayage Isométrique` en français). Si l'outil est trop court, il peut faire contact avec le brut et s'endommager

| Vue isométrique                                                    | Vue de côté                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| <img src="/images/Meca/Fusion360/Operations_ContactError1.webp" /> | <img src="/images/Meca/Fusion360/Operations_ContactError2.webp" /> |

Dans ce cas, il est recommandé d'utiliser la limite de profondeur afin de dégrossir une première fois la pièce

Se rendre dans l'onglet `Heights`
<img src="/images/Meca/Fusion360/Operations_ToolbarHeights.webp" />

Augmenter l'offset du bas afin de limiter la descente de la fraise
<img src="/images/Meca/Fusion360/Operations_BottomHeightOffset.webp" />

<img src="/images/Meca/Fusion360/Operations_BottomOffsetAnimation.webp" />


| Vue isométrique                                                   | Vue de côté                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| <img src="/images/Meca/Fusion360/Operations_DepthsLimit1.webp" /> | <img src="/images/Meca/Fusion360/Operations_DepthsLimit2.webp" /> |

On peut ensuite créer une seconde opération du même type qui terminera proprement l'usinage

### Stock to leave
Certaines opérations d'usinage retirent trop de matière et il est parfois nécéssaire de conserver un peu de marge.

Pour cela, se rendre dans l'onglet `Passes`
<img src="/images/Meca/Fusion360/Opertaions_ToolbarPasses.webp" />

En fonction des opérations, les options `Radial Stock to Leave` ou `Axial Stock to Leave` sont disponibles. Des explications sont disponible dans Fusion360 si vous gardez votre curseur sur un des champs.

Globalement, il est recommandé d'entrer la même valeur pour les deux paramètres quand ils sont disponibles.
<img src="/images/Meca/Fusion360/Operations_StockToLeave.webp" />

> [!tip]
> Cette option est facultative et n'est pas toujours nécéssaire