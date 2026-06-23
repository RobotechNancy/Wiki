---
author: AnthonyHgl
---

# Animation sur Fusion360

> [!warning]
> Pour faire une animation, il faut d’abord terminer l’assemblage du robot.

Passer à l'espace de travail `Animation` 

![Espace de travail animation](/images/Meca/Divers/Animation/animation_workspace.webp)

La **timeline** avec le **curseur** se situent en bas de l'écran.

On peut déplacer le curseur sur la timeline pour créer des animations, à chaque fois pour en créer une nouvelle, il faut déplacer le curseur sur une zone vide de la timeline

![Timeline de l'animation](/images/Meca/Divers/Animation/animation_timeline.webp)

Pour faire bouger la caméra lors de l’animation :
- On déplace le curseur sur la timeline
- On déplace ensuite la caméra

Pour faire bouger une pièce :
- On déplace le curseur sur la timeline
- On sélectionne la pièce
- On clique sur  Transformer les composants »
- Des flèches apparaissent sur la pièce, on la déplace dans la direction souhaitée.
- On clique sur ok

  
> [!danger] ATTENTION
> Ne pas bouger la caméra


Pour faire une vue en éclatement, on peut le faire de façon automatique en cliquant sur Éclate automatique. Il y a aussi une option manuelle.
![Vues éclatées](/images/Meca/Divers/Animation/animation_vue_eclatee.webp)

Une fois l'éclatement fait, on peut réassembler de façon automatique avec `Restaurer la vue de début`.<br/>
Attention, cela va remettre le robot ou la pièce dans la position initiale qui est celle dans l’espace de travail Conception.

Pour l’animation, il vaut mieux faire plusieurs scénarios, par exemple un scénario pour faire la présentation du robot avec un éclatement, puis un autre scénario qui montre les actions du robot.

Pour créer un créé un **scénario** : on clique sur le + et on peut choisir si on commence le scénario à la fin du suivant ou si on commence dans la position initiale.
