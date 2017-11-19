'use strict';

 /**
 * @file server.js
 * @desc Point d'entrée de l'application 'PizzaParty'. <br />
 * L'application PizzaParty permet de gérer une liste de <br/>
 * pizza par le biais d'un backoffice
 * Date de Création 19/11/2017 <br />
 * Date de modification 19/11/2017 <br />
 * 
 * @version Alpha 1.0.0
 * 
 * @author Benjamin MARTIN <benjamin.martin@ynov.com>
 */

/**
 * Modules Requis
 */ 
const path       = require('path');
const express    = require('express');
const app        = express();
const http       = require('http').Server(app);
const bodyParser = require('body-parser');
const mongoose   = require('mongoose');
const pizza      = require('./Controller/pizzaController');
const ingredient = require('./Controller/ingredientController');

/**
 * Initialisation des variables
 */
const port       = process.env.PORT || 3000;


/**
 * Connection à la BDD
 */
mongoose.connect('mongodb://127.0.0.1/test', err =>{
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
var db = mongoose.connection; 

/**
 * Configuration
 */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'View')));
app.use(express.static(path.join(__dirname, 'node_modules', 'socket.io-client', 'dist')));

/**
 * Routes
 */
app.use('/pizza', pizza);
app.use('/ingredient', ingredient);

/**
 * Initialisation du serveur web
 */
app.listen(port, ()=>{
  console.log(`WebServer Starting at: ${port}`);
});