# Méthode d'utilisation de la CNC

> [!warning] ⚠️ PAGE EN CONSTRUCTION ⚠️
> Utilisez votre CNC avec délicatesse<br>
> La direction décline toute responsabilité en cas de dégats matériels

## Sur Fusion

- Exporter le Fichier au Format DXF
  > DXF : Mise en plan (prend le modèle 3D et le transforme en 2D)

## Sur Inkscape

- Vectoriser le fichier.
- Aller vers chemin vers G-Code
- Définir la profondeur (nombre de couche)
- Appliquer

Le fichier est bien exporté en NC, ou NGC pour pouvoir l’ouvrir dans Candel.

## Sur Candel

- Ouvrir le fichier
- Allumer la machine (Attention bien retirer l’arrêt d’urgence)
- Brancher le câble USB entre l’ordi et la machine.
- Aller dans paramètre réglage et renseigner la COM où est branchée la machine (on trouve ce renseignement dans le gestionnaire de périphérique de votre ordinateur)
- Appuyer sur le cadenas pour débloquer les moteurs
  > Cette commande ramène la fraise à l’origine de la machine.
  >
  > Cette commande défini une nouvelle origine (Pour synchroniser celui du dessin et de la machine)
- Cela permet de bouger la fraise depuis l’ordinateur.
  > [!note]
  > Bien choisir le Pas (en mm)

Le point orange est la position de la pointe sur la machine
Le point vers c’est l’origine
Le point rouge c’est le debut du dessin

Il faut aligner le point orange et le point rouge.

Envoyer le Code.

Bien etre à coté du bouton d’arrêt d’urgence !!!

> [!note] Ressource :
> Pour etablir le 0 sur l’axe z
>
> https://youtu.be/0hgfiE7iyZQ
