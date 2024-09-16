const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { sequelize } = require('./models/userModel'); // Importation de Sequelize
const userRoutes = require('./routes/userRoutes'); // Importation des routes utilisateur

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware pour parser le corps des requêtes

app.use('/api/users', userRoutes); // Utilisation des routes utilisateur

// Exemple de route GET
app.get('/BDD', function(req, res){
    return res.status(200).send("Vous avez récupéré toutes les données de votre base de données");
});

// Exemple de route POST
app.post('/BDD', function(req, res){
    return res.status(201).send("Vous avez créé de nouvelles données dans votre base de données");
});

// Exemple de route DELETE
app.delete('/BDD/:id', function(req, res){
    return res.status(200).send("Vous avez supprimé les informations de votre base de données ayant l'id " + req.params.id);
});

// Exemple de route PUT
app.put('/BDD/:id', function(req, res){
    return res.status(200).send("Vous avez modifié les informations de votre base de données ayant l'id " + req.params.id);
});

// Gestion des routes inconnues
app.use(function(req, res){
    return res.status(404).send("L'URL demandée est inconnue...");
});

app.set("host", process.env.HOST);
app.set("port", process.env.PORT);

// Synchronisation avec la base de données
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
    app.listen(app.get('port'), function(){
        console.log(`Server is running on http://${app.get('host')}:${app.get('port')}`);
    });
  })
  .catch(err => {
    console.log('Error: ' + err);
  });
