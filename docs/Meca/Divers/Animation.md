---
author: AnthonyHgl
---

# Animation sur Fusion360

> [!warning]
> Pour faire une animation il faut d’abord terminer l’assemblage du robot.

Passer à l'espace de travail `Animation`

![Espace de travail animation](/images/Meca/Divers/Animation/animation_workspace.png)

La **timeline** avec le **curseur** se situent en bas de l'écran.

On peut déplace le curseur sur la timeline pour créer des animation, a chaque fois pour en créer une nouvelle il faut déplace le curseur sur une zone vide de la timeline

![Timeline de l'animation](/images/Meca/Divers/Animation/animation_timeline.png)

Pour faire bouger la caméra lors de l’animation :
- On déplace le curseur sur la timeline 
- On déplace ensuite la camera

Pour faire bouger une pièce :
- On déplace le curseur sur la timeline 
- On sélectionne la pièce
- On clique « Transformer les composants »
- Des flèches apparaisses sur la pièce on la déplace dans la direction souhaité.
- On clique sur ok

> [!danger] ATTENTION
> Ne pas bouger la caméra


Pour faire une vue en éclatement on peut le faire de façons automatique en cliquant sur Eclaté automatique. Il y a aussi une option manuel.
![Vues éclatées](/images/Meca/Divers/Animation/animation_vue_eclatee.png)

Une fois éclatement fait on peut réassembler de façons automatique avec `Restaurer la vue de début`.<br/>
Attention cela va remettre le robot ou la pièce dans la position initial qui est celle dans l’espace de travaille Conception.

Pour l’animation il vaut mieux faire plusieurs scénario par exemple un scénario pour faire présentation du robot avec un éclatement puis un autre scénario qui montre les actions du robot.

Pour un crée un **scénario** : on clique sur le + et on peut choisir si on commence la scénario à la fin du suivant ou si on commence dans la position initial. 
