# Etapes pour le fichier .env

1 - Créer un fichier .env à la racine du projet
2 - Ajouter la variable souhaitée sans espace et sans guillemets (ex: PORT=3000)
3 - Ajouter le fichier .env dans le .gitignore
4 - installer le package dotenv (npm install dotenv)
5 - importer le package dotenv dans le fichier : import 'dotenv/config'
6 - utiliser la variable d'environnement : process.env.PORT qui est une chaine de caractère
    a) si vous êtes sûr qu'elle existe : process.env.PORT as string
    b) si vous n'êtes pas sûr qu'elle existe : process.env.PORT || 3000
7 - si la variable est un nombre, vous pouvez la convertir en nombre : parseInt(process.env.PORT)
8 - si la variable est un booléen, vous pouvez la convertir en booléen : process.env.PORT === 'true'
9 - Utilisez la variable d'environnement dans le code