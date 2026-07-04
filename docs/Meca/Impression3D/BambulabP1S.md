# Bambulab P1S

<!-- TODO: Add content for Bambulab P1S page -->

La [Bambu Lab P1S](https://eu.store.bambulab.com/fr/products/p1s) est une imprimante 3D accessible et idéale pour les débutants. Elle possède une enceinte fermée, avec des ventilateurs et des filtres carbones, ce qui protège des odeurs toxiques émanant de l'impression avec de l'ABS par exemple.

<img src="/images/Meca/Impression3D/Printers/BambuLabP1S.webp" width="100%" class="no-shadow"/>

*Source : [Bambu Lab Store](https://eu.store.bambulab.com/fr/products/p1s)*

Dans ce guide, nous détaillerons comment s'en servir, ainsi que quelques tips pour sa maintenance.


## Configuration de la Bambu Lab P1S ou autre imprimante Bambu Lab

### Étape 1 : Allumer l’imprimante (évidemment)

<img src="/images/Meca/Impression3D/BoutonP1s.webp" style = "width: 100%; margin-top: 20px;" class="no-shadow"/>


### Étape 2 : Installer les logiciels nécessaires

Il faudra installer deux logiciels:

- [Bambu Studio](https://bambulab.com/fr-fr/download/studio), le slicer de Bambu Lab

-  [Bambu Handy](https://bambulab.com/en/download/app), une application sur PC ou Mobile qui permet de moniter la Bambu Lab à distance, gérer les impressions, etc.

> [!NOTE]
> Un autre slicer équivalent est Orca Slicer, qui donne plus de possibilités avec les imprimantes autre que des imprimantes Bambu Lab (ex : [CrealityCR10SPro](CrealityCR10SPro))


### Étape 3 : Connecter l’imprimante au PC

Une fois les logiciels installés, il faut lier l’imprimante au slicer/téléphone. Voici un [guide](https://wiki.bambulab.com/en/studio-handy/handy/bambu-handy-quick-start) qui explique comment le faire via un QR Code ou code PIN. Une alternative est la connexion par code d'accès :

<img src="/images/Meca/Impression3D/P1sFusionée.webp" width="100%" class="no-shadow" />
<img src="/images/Meca/Impression3D/BindP1s.webp" width="100%" class="no-shadow" />


Et voilà. Vous pouver maintenant imprimer avec la Bambu Lab avec Bambu Studio. Pour le processus d'impression, rendez-vous à [cette page](GuideBambuStudio) du Wiki.


## Maintenance de la Bambu Lab P1S

### Filaments bloqués dans l'AMS

Si un fil est bloqué entre l’AMS et la buse, détachez le tube à l’aide d’une pince, et retirez le filament bloqué.

<img src="/images/Meca/Impression3D/tubearrière.webp" width="100%" class="no-shadow" />

Si c’est l’AMS qui a un fil cassé à l’intérieur, alors il faudra le démonter et retirer le filament.

<div style = "width: 100%; height: 300px; display: flex; flex-direction: row; gap: 10px">
    <img src="/images/Meca/Impression3D/AmsFront.webp" width="50%" class="no-shadow" />
    <img src="/images/Meca/Impression3D/AmsCable.webp" width="50%" class="no-shadow" />
</div>

*Source : [Wiki Bambu Lab](https://wiki.bambulab.com/en/x1/maintenance/replace-filament-hub)*


### Problème de calibration

Si l’imprimante ne peut pas calibrer sur l’axe Z, c’est que la plaque est à l'envers.

<img src="/images/Meca/Impression3D/CalibrationZ.webp" width="100%" class="no-shadow" />