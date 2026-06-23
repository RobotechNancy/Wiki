Guide Filament imprimante 3d 

Table des matières
PLA (Acide polylactique) :	1
PETG (polyéthylène téréphtalate modifié au glycol) :	1
ABS (Acrylonitrile butadiène styrène) :	1
PVA (PolyVinyl Alcohol) :	2
TPU (Polyuréthane Thermoplastique) :	3
Guide Générale :	3
Humidité et filament :	3
Filament -CF :	5



PLA (Acide polylactique) :

-	-Le PLA a une très grande résistance mécanique mais ne résiste pas aux impacts et aux hautes températures ( 50-60°C après ça, il perd en résistance) .
-	PLA+ une autre version du PLA, plus cher mais plus résistant équivalent à l’ABS sans les dangers de l’imprimer (voir documentation ABS) mais avec le même défaut des hautes température.
-	Conseil d’impression : Matériaux très faciles à imprimer, température d’impression : voir sur la bobine mais en général entre 190 et 220°C pour la buse et de 40 à 60°C pour le plateau.


PETG (polyéthylène téréphtalate modifié au glycol) :
-	- Le PETG est moins solide que le PLA mais avec une plus grande résistance aux chocs et à haute température ( 80°C)
-	Conseil d’impression : Matériaux assez faciles à imprimer, température d’impression : voir sur la bobine mais en général entre 220 et 250°C pour la buse et de 50 à 75°C pour le plateau.
-	Un bon matériau pour, par exemple, des engrenages car le PETG peut légèrement se déformer sans se casser.
> [!DANGER] ⚠️ ATTENTION ⚠️
> Le PLA et le PETG ne se mélangent pas, vous ne pouvez pas faire moitié PLA puis moitié PETG. Les deux parties se détachent cependant, cela peut être utilisé comme interface entre support et objet.

ABS (Acrylonitrile butadiène styrène) :
-	L’ABS est un matériau qui résiste à haute température (100°C) et résiste aux impacts.
-	Conseil d'impression : Matériaux difficiles à imprimer, température d'impression : voir sur la bobine mais en général entre 210 et 250°C pour la buse et de 80 à 110°C pour le plateau.

>[!DANGER] ⚠️ ATTENTION ⚠️
>- L’ABS ne peut qu'être imprimé dans une imprimante fermée (Bambu Lab P1S)  pour éviter le[Warping](https://www.nouvelleecole.fr/blog/warping-impression-3d), de plus l’ABS produit des particules qui peuvent être toxiques donc il faut bien ventiler la pièce (Bambu Lab P1S a un filtre à charbon actif)

-	L’ASA est une autre version de l’ABS mais a une plus grande résistance à l’extérieur (UV, etc)

<img src="/images/Meca/Impression3D/PLA-vs-PLA-strength_1000x.webp" width="33%" class="no-shadow" />
https://www.makershop.fr/blogs/guide/difference-entre-les-filaments-pla-pla

<img src="/images/Meca/Impression3D/proprietes-mecaniques-pla-abs-pet-g.webp" width="33%" class="no-shadow" />
https://www.filimprimante3d.fr/pages/choisir-son-filament-le-guide-ultime-de-limprimeur-3d

PVA (PolyVinyl Alcohol) :
-	Un matériau de support ( Hydrosolube) très bien pour enlever les supports en le plongeant dans l’eau chaude, il va se dissoudre sans danger pour vous et l’environnement.
>[!DANGER] ⚠️ ATTENTION ⚠️
>-  Ne pas l’utiliser pour imprimer un objet et protéger le de l’humidité.

TPU (Polyuréthane Thermoplastique) :
-	Le TPU est un matériau très flexible et peut être étiré,peut être utilisé pour des roues, embout de pince pour son adhérence, etc…
-	Le TPU XX A et TPU XX D  donne seulement la dureté du matériaux ex :
D > A et 95 A > 85A
<img src="/images/Meca/Impression3D/durete-shore-recreus-blog_600x600.webp" width="33%" class="no-shadow" />
https://www.filimprimante3d.fr/blogs/guide-filament-imprimante-3d/filament-tpu-le-point-sur-loffre-en-2024

>[!DANGER] ⚠️ ATTENTION ⚠️
>- A cause de sa flexibilité, il ne peut pas être utilisé dans l’AMS, et il doit être mis dans la buse de façon directe (voir conseil Imprésion TPU). De plus, le TPU est très sensible à l’humidité.
>-	Seul le TPU pour AMS peut être utilisé dans l’AMS, il a une durée de 68D.

Guide Générale : 
-	https://www.filimprimante3d.fr/pages/choisir-son-filament-le-guide-ultime-de-limprimeur-3d

Humidité et filament : 

À cause de l’humidité présente dans l’air, les filaments absorbent cette humidité et cela fragilise les objets imprimés, réduit la qualité d’impression et rend les filaments cassants, ce qui pose énormément de problèmes surtout avec l’AMS.

Pour éviter ce problème, il faut gardé les filament a l’abris de l’humidité avec des boites étanches (AMS, PolyBox, ect…) et de rajouter des billes de silicate.

Certient matériaux prenne l’humidité plus facilment que d’autre, le PLA est assée résistant alors que le TPU,PETG,PVA,ect… i sont trés sensible il faut les séchés de préférence avant chaque utilisation surtout si laissée a l’air libre.

Pour les sécher, il faut utiliser un désydrateur de filament comme le PolyDryer et de le paramétrée pour le filament a sécher.

<img src="/images/Meca/Impression3D/PolyDryer.webp" width="33%" class="no-shadow" />
<img src="/images/Meca/Impression3D/TempDryer.webp" width="33%" class="no-shadow" />

Filament -CF :
-Les filaments -CF sont des filaments standard avec des fibres de carbone PLA-CF, PETG-CF, etc…

Ces filaments, comme dit précédemment, sont renforcés avec des fibres de carbone pour augmenter leur résistance mécanique.
>[!DANGER] ⚠️ ATTENTION ⚠️
>Ces types de filament sont extrêmement abrasifs, ils endommagent les buses d'impression et donc il faut des buses en acier trempé dont actuellement (05/05/2026) la P1S n’est pas équipée (https://eu.store.bambulab.com/fr/bundles/hardened-steel-upgrade-combo-p1-series?id=599010675973984256 lien pour achat d‘une amélioration) , De plus, lors des frottements et cassages de ces filaments/objets, il relâche ces fibres qui peuvent être dangereuses pour la santé, c’est pour ça que je n’ai pas acheté, mais si vous voulez en acheter, il faut faire attention avec.