# Utilisez une image de Node.js
FROM node:18-alpine

# Définissez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et package-lock.json
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Installez le paquet "serve" globalement
RUN npm install -g serve

# Copiez les fichiers de l'application
COPY . .

# Construisez l'application
RUN npm run build


# Exposez le port sur lequel "serve" écoutera (par défaut 5000)
EXPOSE 5000

# Commande pour démarrer "serve"
CMD serve dist -p 5000
