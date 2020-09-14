const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const CategorieRouter = require('./routes/categorie');
const UserRouter = require('./routes/user');
const ArticleRouter = require('./routes/article');
const CommandeRouter=require('./routes/commande');



const path = require('path')

mongoose.connect("mongodb://localhost:27017/db_vinted",
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use('/images', express.static(path.join(__dirname, 'images'))); 
  
  app.use('/api/categorie/',CategorieRouter);
  app.use('/api/user/',UserRouter);
  app.use('/api/article/',ArticleRouter);
 
module.exports = app;




