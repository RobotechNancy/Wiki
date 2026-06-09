# Préparation ProverXL 4030

## Installation

- Télécharger les [drivers Genmitsu ProverXL 4030](https://docs.sainsmart.com/article/vdgvaufcu1-genmitsu-prover-xl-4030-resources#driver)
  <file src="https://genmitsu.s3.us-east-1.amazonaws.com/CH341SER/CH341SER_202205.ZIP">Drivers Windows</file>
  <file src="http://s3.amazonaws.com/s3.image.smart/download/101-60-280PRO/CH341SER_MAC.zip">Drivers MacOS</file>
- Télécharger [Candle](https://github.com/Denvi/Candle/releases/latest), le logiciel de contrôle de la machine
  > <small>Si vous ne savez pas quelle version utiliser, choisissez `candle-10.12.msi`</small>

En cas de besoin, se référer à la [documentation de Genmitsu](https://docs.sainsmart.com/article/vdgvaufcu1-genmitsu-prover-xl-4030-resources)

## Paramétrage de Candle

- Ouvrir Candle
- Dans la bar du haut, ouvrir `Service/settings`
- Naviguer tout en bas dans `User commands`
- Supprimer toutes les entrées avec le bouton `Remove all` [^note^][Reset entries]
- Télécharger le profil Candle suivant :
  <file src="Genmitsu_ProveXL_4030_userCommands.uc">Profile</file>
- Cliquer sur `Importer` et charger le fichier téléchargé précédement
- Le champ `User commands` devrait contenir les icones suivantes
  <img src="/images/Meca/SetupCNC/UserCommands.webp" alt="Panneau Control" left>

[Reset entries]: /Meca/Divers/CommandesParDefaut "Réinitialiser les entrées"

## Calibrage

- Brancher le contrôleur au secteur ET à l'ordinateur
- Ouvrir `Service/Settings`, dans le menu `Connection`, sélectionner `Serial` et appuyer sur le bouton de rafraichissement
  > <img src="/images/Meca/SetupCNC/buttons/Connection.webp" alt="Pages des paramètres de connection">
  > <small>Il peut être nécéssaire de changer de Port de connection</small>
- Vérifier que tous les capteurs de butée sont branchés au boitier de la machine
- Cliquer sur le bouton "Home" (le premier) dans le panneau `Control`
  > <img src="/images/Meca/SetupCNC/buttons/HomeButton.webp" alt="Panneau Control" left>
  > <small>Cela permet de calibrer l'origine de la machine</small>
  >
  > ::: danger ⚠️ ATTENTION ⚠️
  > La machine va se déplacer à l'origine, en haut, au fond, à droite
  > :::
- Réinitialiser l'état de la machine à l'aide du bouton "Reset" et du bouton "Unlock"
  > <img src="/images/Meca/SetupCNC/buttons/ResetUnlock.webp" alt="Panneau Control" left>
  > <small>Le bouton "Unlock" permet d'autoriser le déplacement manuel la tête</small>
- Déplacer la tête manuellement vers le coin de la pièce à usiner à l'aide des touches de déplacement
  > <img src="/images/Meca/SetupCNC/buttons/Move.webp" alt="Boutons de déplacement" width="40%" left>
  > <small>Il peut être intéressant de configurer le Step (pas) et le feed (vitesse de déplacement)</small><br>
  > <small>Le pas "Continuously" permet de déplacer la machine tant qu'une touche est pressée</small>
- Attacher la sonde à la fraise à l'aide de la pince croco
  > <img src="/images/Meca/SetupCNC/zprobe.webp" alt="Boutons custom de probe" width="33%" left>
  > <small>La sonde en métal fait contact avec la fraise, qui fait contact avec la pince</small>
- Utiliser les boutons de sonde pour étalonner chacun des axes
  > <img src="/images/Meca/SetupCNC/buttons/Probes.webp" alt="Panneau Control" left>
  > <small>Penser à utiliser une pièce de métal coudée pour les axes X et Y</small>

  > [!danger] ⚠️ ATTENTION ⚠️
  > La machine va avancer lentement dans la direction sélectionnée (X, Y ou Z) jusqu'à ce que la fraise touche la sonde
