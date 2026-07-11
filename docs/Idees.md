# Idées de fonctionnalités

Voici une liste non exhaustive de quelques fonctionnalités qu'il reste à implémenter. Cette liste devra être mise à jour pour ajouter de nouvelles idées ou supprimer celles qui sont déjà réalisées.

Pour plus d'informations, veuillez consulter les rapports de l'année vous précédant, où contacter directement les anciens sur Discord.

- **Intégrer le LIDAR et réaliser l'odométrie** : Configurer le nouveau LIDAR sous ROS2 et implémenter l'odométrie

- **Valider le PCB de la carte automates** :  Vérifier les pistes, vias, empreintes et autres, et gérer les problèmes de puissance.

- **Gérer le manque de port UART sur la Raspberry** : Les cartes automate et base roulante communiquent en UART avec la Raspberry, or cette dernière n'a qu'un port UART.

- **Réaliser une alimentation digne de ce nom** : Concevoir et rélaiser une alimentation pour le robot, si possible avec un BMS (Battery Management System) pour gérer la charge et la décharge de l'alimentation.

- **Finaliser le capteur IR** : Commander le PCB, souder les composants et tester.

- **Intégrer un communication PAMI - Robot** : Réaliser une liaison Haute Fréquence avec le PAMI (par exemple module Xbee), permettant une synchronisation des actions de match.

- **Réaliser une IHM pour le robot** : Réaliser un écran gérée par la Raspberry, qui montre visuellement les points accumulés, affiche l’état interne du système, les variables de debug logicielles et les alertes matérielles.
