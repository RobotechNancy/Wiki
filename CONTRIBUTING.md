# Guide de bonnes pratiques

- [Gestionnaire de paquets](#gestionnaire-de-paquets)
  - [Windows](#windows)
  - [Linux](#linux)
  - [Setup general](#setup-general)
- [Contribution Git](#contribution-git)
  - [Utilisation des branches](#utilisation-des-branches)
  - [Formattage des commits](#formattage-des-commits)
    - [type](#type)
    - [scopes](#scopes)
    - [Message title](#message-title)
- [Environnement VSCode](#environnement-vscode)
- [Structure du projet](#structure-du-projet)

Ce dépot Github utilise un certain nombre de conventions afin de garder son code clair et maintenable pour les personnes à venir

<!-- #region PackageManager -->
## Gestionnaire de paquets
Le framework VitePress utilisé ici est basé sur NodeJS. Il faut donc installer toute la suite logicielle.

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

### Linux
- Installer NodeJS
    ```bash
    # Ubuntu / Debian-based
    sudo apt install nodejs -y
    ```
    <details>
    <summary>Autres distributions</summary>

    ```bash
    # Fedora / RHEL-based
    sudo dnf install nodejs
    ```

    ```bash
    # Archlinux
    sudo pacman -Sy nodejs
    ```

    ```bash
    # Fedora / RHEL-based
    sudo xbps-install nodejs
    ```
    </details>

- Installer pnpm
    ```bash
    curl -fsSL https://get.pnpm.io/install.sh | sh -
    ```

### Setup general
Vous pouvez à présent cloner le dépot
```bash
git clone https://github.com/RobotechNancy/Wiki.git
```

Installer tous les paquets nécessaires
```bash
pnpm install
```

Pour démarrer le serveur de développement, vous pouvez au choix lancer la tache `🌐Start dev server` soit lancer la commande
```bash
pnpm run dev
```

Vous pouvez finalement ouvrir l'adresse suivante [`http://localhost:5173/Wiki/`](http://localhost:5173/Wiki/)
<!-- #endregion -->

<!-- #region GitContribution -->
## Contribution Git

### Utilisation des branches
La branche principale (master) du dépot est protégée en écriture. Il n'est donc pas possible de push un commit directement dessus.

Pour cela, il est nécéssaire de créer une branche dans laquelle vous ajouterez vos modifications.

Il est recommandé de nommer sa branche selon les mêmes noms que les [types](#type) que les commits comme suit
```
type/branch_name
```

Exemple : `feature/fusion360_machine`, `fix/typo`

### Formattage des commits
Ce dépot utilise la norme [*Conventional Commits*](https://www.conventionalcommits.org/) et les tags de la norme de Angular, trouvable [[ici]](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type)

> [!CAUTION] ATTENTION
> Il est demandé de suivre les conventions de commit décrites ici lors de la publication de modifications

Lors d'un commit, la forme globale du message est la suivante
```
type(scope): Message title
Message body and larger description
```
#### type
- **build**: Changements affectant le système de build (example de scopes: vscode, github, npm)
- **ci**: Un changement dans les scripts d'intégration continue (CI)
- **docs**: Changements de la documentation (*non applicable ici*)
- **feat**: Une nouvelle fonctionnalité
- **fix**: Une correction de bug
- **perf**: Une amélioration de performance
- **refactor**: Un code qui ne corrige le code ni n'ajoute de fonctionnalité
- **style**: Changements qui n'affectent pas le fonctionnement du code (espaces, formattage, point-virgule manquant)
- **test**: Ajout ou modification de tests

#### scopes
Les scopes font partie de la norme *Conventional Commits* mais étant optionnels, ils sont rarement utilisés

Ils doivent décrire le contexte de la modification et peuvent être par exemple
- info
- meca
- elec

#### Message title
Le titre doit décrire succintement le changement
- Utiliser le présent de l'impératif
- Mettre une majuscule en début de phrase
- Ne pas mettre de point (.) en fin de phrase
<!-- #endregion -->

<!-- #region VSCodeEnvironment -->
## Environnement VSCode
Des fichiers de configuration pour [VSCode](https://code.visualstudio.com/) sont disponibles afin de faciliter le développement

Pour les utiliser il suffit de presser `F1`et d'entrer `Tasks: Run Build Task` ou d'utiliser la combinaison de touches par défaut `Ctrl + Shift + B`.

Une fenêtre contenant les différents scripts s'affichera alors

Les différentes commandes disponibles sont:
- 🪄 Setup project
- 🌐 Start dev server
- 🔨 Build project
- 🌳 Generate tree
- 🖼️ Compress image
<!-- #endregion -->

<!-- #region ProjectStructure -->
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
│   ├── public/             # Contient tous les fichiers accessibles depuis le site
│   │   └── images/         # Contient les images du site
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
<!-- #endregion -->
