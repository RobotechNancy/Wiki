# Guide de bonnes pratiques

Ce dépot Github utilise un certain nombre de conventions afin de garder son code clair et maintenable pour les personnes à venir

## Gestionnaire de paquets
Le framework VitePress qui est utilisé est basé sur NodeJS. Il faut donc installer toute la suite logicielle.

### Windows
- Installer NodeJS ([node-v24.16.0-x64.msi](https://nodejs.org/dist/v24.16.0/node-v24.16.0-x64.msi)) ou n'importe quelle version depuis le site de [NodeJS](https://nodejs.org/en/download)
- Si ce n'est pas déjà fait, changer la police d'execution de PowerShell à `Unrestricted` dans un terminal administrateur
    ```powershell
    Set-ExecutionPolicy Unrestricted
    ```
- Installer `corepack`
    ```powershell
    npm install --global corepack@latest
    ```
- Activer `corepack`
    ```powershell
    corepack enable pnpm
    ```

Vous pouvez maintenant installer les paquets nécessaire à l'aide de `pnpm`
```powershell
pnpm install
```

## Structure du projet

```bash
.
├── .vscode/tasks.json      # Contient les commandes VSCode
├── .github/workflows/      # Contient les scripts de déploiement sur Github
├── bin/                    # Dossier contenant tous les scripts executables
├── docs/                   # Le dossier de base de VitePress
│   ├── .vitepress/         # Toutes les configurations
│   │   ├── theme/          # Configuration du theme et du layout du Wiki
│   │   └── config.mts      # Fichier principal du site
│   ├── images/             # Contient les images du site
│   ├── public/             # Contient tous les fichiers accessibles depuis le site
│   ├── **/                 # Tout autre fichier markdwon contenant une page
│   └── index.md            # Accueil du site
├── node_modules/           # Dossier des modules JavaScript
├── .gitignore              # Liste des fichiers ignorés par Github
├── .prettierrc             # Configuration du formattage
├── CONTRIBUTING.md         # Guide de contribution
├── package.json            # Fichier de configuration Node
├── pnpm-lock.yaml          # Liste des packets Node figés
├── TODO.md                 # Liste des taches à réaliser pour le Wiki
├── README.md               # Fichier d'information
└── tsconfig.json           # Fichier de configuration de TypeScript
```

## Environnement VSCode
Des fichiers de configuration pour [VSCode](https://code.visualstudio.com/) sont disponibles afin de faciliter le développement

Pour les utiliser il suffit de presser `F1`et d'entrer `Tasks: Run Build Task` ou d'utiliser la combinaison de touches par défaut `Ctrl + Shift + B`.

Une fenêtre contenant les différents scripts s'affichera alors

## Formattage des commits
Ce dépot utilise la norme [*Conventional Commits*](https://www.conventionalcommits.org/) et les tags de la norme de Angular, trouvable [[ici]](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

Lors d'un commit, la forme globale du message est la suivante
```
action(scope): Message title
Message body and larger description
```
### actions :
- **build**: Changements affectant le système de build (example de scopes: vscode, github, npm)
- **ci**: Changes to our CI configuration files and scripts
- **docs**: Changements de la documentation (*non applicable ici*)
- **feat**: Une nouvelle fonctionnalité
- **fix**: Une correction de bug
- **perf**: Une amélioration de performance
- **refactor**: Un code qui ne corrige le code ni n'ajoute de fonctionnalité
- **style**: Changements qui n'affectent pas le fonctionnement du code (espaces, formattage, point-virgule manquant)
- **test**: Ajout ou modification de tests

### scopes :
Les scopes font partie de la norme *Conventional Commits* mais étant optionnels, ils sont rarement utilisés

Ils doivent décrire le contexte de la modification et peuvent être par exemple
- info
- meca
- elec


### Message title:
Le titre doit décrire succintement le changement
- Utiliser le présent de l'impératif
- Mettre une majuscule en début de phrase
- Ne pas mettre de point (.) en fin de phrase
