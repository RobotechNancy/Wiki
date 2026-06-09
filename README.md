# Wiki de robotech

<!-- #region Content -->
> [!WARNING]
> La branche `master` est protégée en écriture, il est nécéssaire de créer une Pull Request pour faire des modifications
>
> [[Tutoriel]](Guide#utilisation-des-branches)

## Modifier une page

- Ouvrir le fichier correspondant
- Modifier le fichier
- C'est bon

## Ajouter une page

- Modifier `/docs/.vitepress/config.mts` et y ajouter le document à l'emplacement voulu à l'aide de la template suivante :

```ts
{
    text: "Nom de la Page",
    link: "/Lien/Vers/La/Page/NomPage",
},
```
- Appuyer sur `Ctrl + Shift + B` (commande `Tasks: Run build Task` par défaut dans VSCode)
- Sélectionner `🌳 Generate tree`

::: details Procédure manuelle
Si vous n'utilisez pas VSCode, vous pouvez simplement créer un document `NomPage.md` à l'emplacement spécifié dans le champ `link`
:::

> [!NOTE]
> Utiliser [PascalCase](https://pascal-case.com/) pour nommer les fichiers

<!-- #endregion -->