---
outline: [2, 3]
---

# Guide du contributeur

Ce wiki utilise [`VitePress`](https://vitepress.dev/) pour générer des pages statiques à partir de fichiers markdown. Le gestionnaire de paquet utilisé est [`pnpm`](https://pnpm.io/)

<!-- @include: /../../CONTRIBUTING.md#PackageManager -->
<!-- @include: /../../CONTRIBUTING.md#GitContribution -->

## Ajout d'une page

- Ouvrir [`config.mts`](https://github.com/RobotechNancy/Wiki/edit/master/docs/.vitepress/config.mts)
- Ajouter une page à l'emplacement voulu dans l'objet `sidebar`
- Executer la commande `pnpm run gen` afin de générer la page ajoutée
- Ouvrir le / les fichiers générés aux emplacements concernés

<!-- @include: /../../CONTRIBUTING.md#VSCodeEnvironment -->
<!-- @include: /../../CONTRIBUTING.md#ProjectStructure -->
