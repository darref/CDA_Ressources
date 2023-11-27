// main.ts
import express from 'express';
import { DataTypes, Sequelize } from 'sequelize';

// Configuration Sequelize

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './db.sqlite', // Nom du fichier de la base de données SQLite
});

// Définition du modèle User
const User = sequelize.define('User', {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});

// Synchronisation du modèle avec la base de données
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connexion à la base de données établie avec succès.');
    await sequelize.sync();
  } catch (error) {
    console.error('Impossible de se connecter à la base de données:', error);
  }
})();

// Création du serveur Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware pour traiter les requêtes au format JSON
app.use(express.json());

// Route pour créer un utilisateur
app.post('/api/users', async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const user = await User.create({ firstName, lastName, email });
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur lors de la création de l\'utilisateur' });
  }
});

// Route pour récupérer tous les utilisateurs
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

app.get('api/bonjour/:name' , (req , res)=>{
  return res.append("Bonjour " + req.params.name + " , et bienvenue à toi.")
})

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
