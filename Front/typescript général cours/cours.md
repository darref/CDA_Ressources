# Javascript côté DOM

## Vacances et semaines BDD

Bienvenue nouvelle : Marie Angella ?
Vacances bien passées ?
Cahier de vacances : questions = pauses et discord si ça vous va
Validation brief algorithmes ?
semaine tampon bientôt
Bases de données ok ? UML / Merise / mermaid / dbdiagram.io / Postgres / SQL

## Organisation des ~2 semaines du module :
- Mercredi-Jeudi-Vendredi : Memory avec Thomas et Anthony
- Lundi-Mardi : Todo List + API headless CMS (Strapi) avec Christian
- Mercredi-Jeudi-Vendredi : Gestion de Projet (travail de groupe + organisation d'un projet informatique) avec Anthony

=> Profitez de moi ++ pour ces deux jours (prof ~référent sur cette matière) -> Idées de briefs

## Javascript côté DOM

HTML --- JS --- CSS
JS => TS
Vanilla -> Plus tard, React, Vue, Angular, etc...
Donc si vous trouvez ça un peu chiant à écrire ou à organiser c'est un peu normal
On reverra une partie de ces informations en Front avancé + Frameworks JS
Comprendre le fonctionnement de base de JS est important et ce qu'il permet de faire :
- Manipuler le DOM
- Manipuler des données
- Manipuler des événements
- Manipuler du style
- Manipuler des requêtes HTTP
- stocker des données
- utiliser des API du navigateur

## Manipuler le DOM

window et document et element

window = navigateur
document = page web
element = élément du DOM

### Selectionner un élément du DOM

```ts
document.getElementById('img-patate')
document.getElementsByClassName('img-list')
document.getElementsByTagName('img')
document.querySelector('#img-patate')
document.querySelectorAll('img')
```

### Manipuler le DOM

```ts
const element = document.querySelector('selecteur css')
element.innerHTML = 'nouveau contenu'
element.innerText = 'nouveau contenu'
element.setAttribute('src', 'https://patate.com')
element.style.backgroundColor = 'red'
element.classList.add('toto')
element.classList.remove('tata')
element.classList.toggle('titi')
element.classList.contains('class')
element.classList.replace('class', 'newClass')
```

### Créer un élément

```ts
const element = document.createElement('div')
element.innerHTML = 'nouveau contenu'
element.classList.add('class')
```

### Ajouter un élément

```ts
const element = document.createElement('div')
element.innerHTML = 'nouveau contenu'
element.classList.add('class')
document.body.appendChild(element)
element2.appendChild(element)
```

### Supprimer un élément

```ts
const element = document.querySelector('selecteur css')
element.remove()
```

### Manipuler des données

```ts
fetch('url')
  .then((response) => response.json())
  .then((data) => {
    // data est un objet JS
  })
```

### Manipuler des événements

```ts
const element = document.querySelector('selecteur css')
element.addEventListener('click', (event) => {
  // event est un objet JS
})
```

### Manipuler local storage

```ts
localStorage.setItem('key', 'value')
localStorage.getItem('key')
localStorage.removeItem('key')
localStorage.clear()
```

## Brief 1

https://simplonline.co/briefs/84af9c89-8de3-43ed-86ee-eaf32a5744ea