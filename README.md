# Wiki de robotech

> [!WARNING]
> La branche `master` est protégée en écriture, il est nécéssaire de créer une Pull Request pour faire des modifications
>
> [[Tutoriel]](Guide#utilisation-des-branches)

## Modifier une page

- Ouvrir le fichier correspondant
- Modifier le fichier
- C'est bon

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
