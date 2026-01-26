# Modifier ce wiki

Ce wiki utilise [`VitePress`](https://vitepress.dev/) pour générer des pages statiques à partir de fichiers markdown. Le gestionnaire de paquet utilisé est [`pnpm`](https://pnpm.io/)

## Premier démarrage

- Cloner ce wiki : `git clone https://github.com/RobotechNancy/Wiki.git`
- Installer les paquets nécéssaires : `pnpm install`
- Lancer le serveur live : `pnpm run dev`
- Ouvrir un navigateur web à [`http://localhost:5173/Wiki/`](http://localhost:5173/Wiki/)

## Ajout d'une page

- Ouvrir [`config.mts`](https://github.com/RobotechNancy/Wiki/edit/master/docs/.vitepress/config.mts)
- Ajouter une page à l'emplacement voulu dans l'objet `sidebar`
- Executer la commande `pnpm run gen` afin de générer la page ajoutée
- Ouvrir le / les fichiers générés aux emplacements concernés

## Visual Studio Code

Si vous utilisez [VSCode](https://code.visualstudio.com/), vous pouvez utiliser la commande de build en appuyant sur F1 et en tappant "Tasks: Run Build Task" ou sur le raccourci clavier prévu à cet effet

## Structure

Ce wiki suit la structure suivante :

```bash
.
├── .vscode/tasks.json      # Contient les commandes VSCode
├── .github/workflows/      # Contient le script de déploiement sur Github
├── docs/                   # Le dossier de base de VitePress
│   ├── .vitepress/         # Toutes les configurations
│   │   ├── theme/          # Configuration du theme et du layout du Wiki
│   │   ├── dist/           # Dossier non uploadé sur Github contenant le site compilé
│   │   └── config.mts      # Fichier principal du site
│   ├── images/             # Contient les images du site
│   ├── public/             # Contient tous les fichiers accessibles depuis le site
│   ├── **/                 # Tout autre fichier markdwon contenant une page
│   └── index.md            # Accueil du site
├── node_modules/           # Dossier des modules JavaScript
├── .gitignore              # Liste des fichiers ignorés par Github
├── .prettierrc             # Configuration du formattage
├── generate-pages.mjs      # Script qui génère les fichiers markdown
├── package.json            # Fichier de configuration Node
├── pnpm-lock.yaml          # Liste des packets Node figés
└── README.md               # Fichier d'information
```