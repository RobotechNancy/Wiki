# Calibrage

- Vérifier que tous les cables sont branchés au boitier de la machine (**principalement les capteurs des butées**)
- Cliquer sur le bouton "Home" (le premier) dans le panneau `Control`
  > <img src="/images/Meca/SetupCNC/buttons/HomeButton.webp" alt="Panneau Control" left>
  > <small>Cela permet de calibrer l'origine de la machine</small>
- Réinitialiser l'état de la machine à l'aide du bouton "Reset" et du bouton "Unlock"
  > <img src="/images/Meca/SetupCNC/buttons/ResetUnlock.webp" alt="Panneau Control" left>
  > <small>Le bouton "Unlock" permet d'autoriser le déplacement manuel la tête</small>
- Déplacer la tête manuellement vers le coin de la pièce à usiner à l'aide des touches de déplacement
  > <img src="/images/Meca/SetupCNC/buttons/Move.png" alt="Boutons de déplacement" width="40%" left>
  > <small>Il peut être intéressant de configurer le Step (pas) et le feed (vitesse de déplacement)</small>
- Attacher la sonde à la fraise à l'aide de la pince croco
  > <img src="/images/Meca/SetupCNC/zprobe.png" alt="Boutons custom de probe" width="33%" left>
  > <small>La sonde en métal fait contact avec la fraise, qui fait contact avec la pince</small>
- Utiliser les boutons de sonde pour étalonner chacun des axes
  > <img src="/images/Meca/SetupCNC/buttons/Probes.webp" alt="Panneau Control" left>
  > <small>Penser à utiliser une pièce de métal coudée pour les axes X et Y</small>

> [!danger] ⚠️ ATTENTION
> La machine va avancer lentement dans la direction sélectionnée (X, Y ou Z) jusqu'à ce que la fraise touche la sonde
