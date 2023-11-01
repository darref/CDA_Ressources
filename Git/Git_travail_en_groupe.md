# Git travail en groupe

## Les branches

### Définition

Une branche permet de travailler sur une partie du projet sans affecter le reste du projet.
Une telle branche sera souvent amenée à être fusionnée avec la branche principale du projet, une fois le travail terminé.

### Création

Pour créer une branche, il faut se mettre sur la branche main et récupérer les dernières mises à jour du projet.

```bash
git checkout main
git pull
```

Ensuite, il faut créer la branche et se mettre dessus.
Pour cela vous avez deux possibilités :

```bash
git branch nom_de_la_branche
git checkout nom_de_la_branche
```

ou 

```bash
git checkout -b nom_de_la_branche
```

### Nommage

Il est important de bien nommer ses branches pour s'y retrouver facilement.
Il est conseillé de nommer ses branches en fonction de la fonctionnalité qu'elle va apporter au projet.
Un préfixe peut être ajouté pour indiquer le type de la branche (feature, bugfix, hotfix, ...). Cela est souvent une bonne pratique.

Exemple :
- feature/ajout-du-menu
- bugfix/correction-du-bouton-de-connexion
- hotfix/correction-chat
- feature/handle-double-click-panier

### Fusion

#### Fusion locale

Une fois le travail terminé, il faut fusionner la branche avec la branche main.
Plusieurs méthodes sont possibles.
Nous utiliserons la méthode avec rebase.

Il va falloir récupérer les changements de la branche main en s'y déplaçant et en récupérant les derniers changements.
Adapter notre code pour que tout continue de fonctionner.
Puis nous utiliserons les Pull Request pour fusionner la branche avec main.

```bash
git checkout main
git pull
git checkout nom_de_la_branche
git rebase main
git push --force-with-lease
```

#### Création de la Pull Request sur GitHub.

- Dans le log du push, vous avez un lien qui vous permet de créer la Pull Request.
- Sur GitHub, vous pouvez créer une Pull Request en cliquant sur le bouton "New Pull Request" sur la page du projet.
- Sur GitHub, vous pouvez créer une Pull Request en cliquant sur le bouton "Compare & pull request" sur la page de la branche. Sélectionnez ensuite la branche main comme branche de destination et sur la branche que vous souhaitez fusionner comme branche source.

#### Pull Request

Pour valider une pull request, il faut que le code soit validé par un autre membre de l'équipe. C'est ce que l'on appelle une code review.
Une fois la code review validée, vous pouvez fusionner la branche avec main.