# Je crée mon setup en Typescript

1- Je créer mon dossier "monprojet"

2- Dans le dossier je crée 2 dossier

        - Dossier "client"
        - Dossier "serveur"

3- Je commence à crée l'environnement du "client(front)"

        ```bash

        npm create vite@latest
        npm install

        ```

4- Je crée ensuite l'environnement du "serveur(back)"

        ``` bash

        npm init
        (entrypoint: dist/index.js)

        npm install --save-dev concurrently typescript nodemon @types/node
        ```
5- Ajouter au fichier package.json (copier/coller):

"dev": "concurrently -k -n \"Typescript,Node\" -p \"[{name}]\" -c \"blue,green\" \"tsc --watch\" \"nodemon dist/index.js\"",

"start": "tsc && node dist/index.js"

        ``` bash
        
        npx tsc --init
                    {
                       "compilerOptions": {
                            "module": "commonjs",
                            "esModuleInterop": true,
                            "outDir": "dist",
                            "target": "es6",
                            "strict": true,
                        },
                        "include": ["src/**/*"]
                    }
                    

        ```

6- Créé dans le dossier serveur un dossier nommé "src"

7- Crée dans le dossier src un fichier nommé "index.ts", y ajouté console.log('Hello world');*

8- Dans le index.ts incorporer le code de base d'une API

    ```ts

        import express, { Request, Response } from 'express';

        // Créer une instance d'Express

        const app = express();
        const port = 3000; // Port sur lequel l'API écoutera

        // Middleware pour traiter les requêtes JSON

        app.use(express.json());

        // Endpoint GET de base

        app.get('/', (req: Request, res: Response) => {
        res.send('Bienvenue sur mon API en TypeScript !');
        });

        // Endpoint POST de base

        app.post('/api/data', (req: Request, res: Response) => {
        const { data } = req.body;

        // Traiter les données (dans cet exemple, nous les renvoyons simplement)

        res.json({ donneesRecues: data });
        });

        // Écouter le serveur sur le port spécifié

        app.listen(port, () => {
        console.log(`L'API est en cours d'exécution sur le port ${port}`);
        });

        ```
9- installer "express"

        ``bash

        npm install express
        
        ensuite message d'erreur et copier coller la commande proposé afin d'installer les types

        ``

10- Crée dans le dossier serveur (racine) un fichier ".env"

        Ecrire dedans :
        PORT=3000

11- Pour pouvoir utiliser le .env il faut installer "dotenv"

        ```bash

        npm install dotenv

        ```
12- Ecrire en haut du index.ts

        import dotenv from "dotenv";
        dotenv.config();

13- Crée dans le dossier serveur (racine) un fichier "request.http"

        Ecrire dedans :

        GET http://localhost:3000/

        ####

        POST  http://localhost:3000/api/data/

14- Maintenant il faut mettre en place la base de données avec "sequelize"

        ```bash

        npm install sequelize

        npm install sqlite3
        
        ```
15- Crée dans le dossier serveur (racine) un fichier "index.ts"

        Ecrire dedans :

        import { Sequelize, DataTypes } from "sequelize";
        const sequelize = new Sequelize({
            dialect: "sqlite",
            storage: "./db.sqlite",
        });

16- Définir un modele pour la BDD avec sequelize

        const Mettonmodele = sequelize.define('mettonmodele', {
            nom: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            duree: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            lienimage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            note: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            }, {});

17- Rajouter en haut du fichier index.ts

        async function main(seq: Sequelize) {
            try {
                await seq.authenticate();
                console.log('la connexion est établie');
            } 
            catch (error) {
                console.error('impossible de se connecter à la base de données', error);
            }
            await seq.sync();
            }

18- Installer l'extension CORS

        ```bash
        npm install cors
        
        ```

19- Ajouter dans le fichier index.ts avec les autre import

        import cors from "cors";

20- Installer l'extension dans vs code "RESTCLIENT"

21- Retournons dans le dossier client(front)

    La syntaxe des fetch doit être la suivante :

          const response = await fetch("http://localhost:3000/monmodele", {
            headers: new Headers({"Content-Type": "application/json",}),
            method: "POST",
            body: JSON.stringify({
                mesdonnées: name,
                mesdonnées: duration,
                mesdonnées: imageUrl,
                mesdonnées: note
            }),
        })
        console.log(response)
        const monmodeleAjoutee = await response.json()

        console.log('recette', monmodeleAjoutee)
        afficherRecette(monmodeleAjoutee)
        });

Ensuite faire votre algorithme de communication entre client et serveur.


