# Presentation du logiciel

Kicad possède deux parties principales, la création de schéma (Eeschema) et la création de PCB (Pcbnew). Une bibliothèque de symboles de composant est présente par défaut. Eeschema permet de relier ces symboles pour en faire des schémas. Vous pouvez ensuite associer une empreinte à chaque symbole. Une bibliothèque d’empreinte est aussi présente par défaut avec, parfois, leurs modèles 3D. Pcbnew permet de relier ces empreintes pour en faire un PCB. Vous pouvez avoir une vue 3D de votre carte ce qui est utile pour repérer certains problèmes.

Chaque symbole et chaque empreinte est modifiable. Vous pouvez aussi en importer ou en créer. Cela peut être utile si vous voulez, par exemple, agrandir les pads de soudure des composants ou modifier la sérigraphie auxquels ils sont associés.

## Raccourcis

Kicad possède énormément de raccourcis plus ou moins utiles. La liste est tellement longue que, même avec beaucoup d’expérience, vous serez toujours capables de trouver de nouveaux raccourcis qui vous feront gagner du temps. Les plus utiles seront listés dans la suite du document.

## Plugins, thèmes et bibliothèques

Un gestionnaire de plugins, thèmes et bibliothèques et disponible dans le logiciel. Il vous permet d’installer facilement de nouvelles fonctionnalités. Kicad possède une source (repository) officielle mais vous pouvez aussi trouver des plugins utilisant d’autres sources.

### Plugins les plus utiles

- Interactive Html Bom : aide à lister et placer les composants une fois que la carte est finie
- Round tracks : arrondir les pistes (ce n’est pas les « standard » et ce n’est pas « professionnel » mais c’est joli)
- Plugin de JLCPCB ou PCBWay ou d’autre fabricant : exporter directement la carte au bon format pour le fabricant (le plugin JLCPCB n’est pas dans la source officielle)

## Fabriquer des cartes électroniques à Polytech

Polytech possède une machine pour graver des PCB, ce qui est très pratique pour avoir des prototypes rapidement. Il y a toutefois des restrictions :

- Faire une carte en double face demande beaucoup plus de travail et de temps qu’une carte à une seule face.
- Il n’est pas possible d’avoir de sérigraphie.
- Il est préférable d’éviter de faire des trous de tailles différentes car il faut changer manuellement le foret de la machine.
- Il ne faut pas faire des pistes trop fines ou des trous trop petit (demander les dimensions limites aux professeurs qui gèrent la machine)
- Pour les cartes en double face : mettre les pistes du côté de la soudure
