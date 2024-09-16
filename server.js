const express = require('express');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); //Middleware pour parser le corps des requêtes

app.get('/BDD', function(req, res){
    return res.send("Vous avez récupérer toutes les données de votre base de données")
});
app.post('/BDD', function(req, res){
    return res.send("Vous avez crée de nouvelles données dans votre base de données")
});
app.delete('/BDD/:id', function(req, res){
    return res.send("Vous avez supprimé les informations de votre base de données ayant l'id " + req.params.id)
});
app.put('/BDD/:id', function(req, res){
    return res.send("Vous avez modifié les informations de votre base de données ayant l'id " + req.params.id)
});


app.use(function(req, res){
    return res.send("L'URL demandé est inconnue...");
});

app.set("host", process.env.HOST);
app.set("port", process.env.PORT);

app.listen(app.get('port'), function(){
    console.log(`Server is running on http://${app.get('host')}:${app.get('port')}`);
})
