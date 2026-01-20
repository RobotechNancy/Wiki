# Wiki de robotech

TODO: Synchroniser cette page avec celle du wiki

## Modifier une page

- Ouvrir le fichier correspondant
- Modifier le fichier
- C'est bon

> [!IMPORTANT]
> Utiliser des balises `<img>` plutôt que la syntaxe Markdown `![]()` pour les images
> Le zoom se base sur les balises `<img>`

## Ajouter une page

- Modifier [`/docs/.vitepress/config.mts`](/docs/.vitepress/config.mts) et y ajouter le document à l'emplacement voulu à l'aide de la template suivante :

```ts
{
    text: "Nom de la Page",
    link: "/Lien/Vers/La/Page/NomPage",
},
```
- Créer un document `NomPage.md` à l'emplacement spécifié dans le champ `link`

> [!NOTE]
> Utiliser [PascalCase](https://pascal-case.com/) pour nommer les fichiers
