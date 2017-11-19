"use strict";

/**
 * @file pizzaController.js
 * @module pizzaController
 * 
 * @desc Controlleur des pizzas
 * 
 * @version Alpha 1.0.0
 * 
 * @author Benjamin MARTIN <benjamin.martin@ynov.com>
 */

/**
 * Require Module
 */ 
const express = require("express");
const router = express.Router();

/**
 * get model
 */ 
const pizza = require('../Model/Pizza');

/**
 * @function get
 * @param {String} prend le chemin racine de l'api
 * @description Permet de récuperer les informations de toutes les pizzas
 */ 
router.get('/', (req, res, next) => {
    pizza.find({}, (err, doc) =>{
        console.log(err, doc);
        res.json(doc);
    }).populate('ingredient_ids');
});

/**
 * @function get by id
 * @param {String} prend le chemin racine de l'api + _id de la pizza 
 * @description Permet de récupérer les informations d'une pizza
 */ 
router.get('/:id', (req, res) => {
    console.log(req.params);
    pizza.find({ _id: req.params.id }, (err, doc) => {
        if(err){
            console.error(err);
        } else {
            console.log(doc);
            res.json(doc);
        }
    }).populate('ingredient_ids');
});


/**
 * @function post
 * @param {String} prend le chemin racine de l'api
 * @description Permet de save une pizza
 */
router.post('/', (req, res) => {
    let newPizza = new pizza({ 
            name        : req.body.name, 
            price       : req.body.price, 
            img         : req.body.img,
            ingredient  : req.body.ingredient_ids,
            description : req.body.description,
            created_at  : req.body.created_at,
            updated_at  : req.body.updated_at,
    });
    newPizza.save( (err, doc)=> {
        if(err){
            console.error(err);
        } else {
            res.json(doc);
            console.log(doc);
        }
    });
});

/**
 * @function put
 * @param {String} prend le chemin racine de l'api + _id de la pizza 
 * @description Permet de mettre à jour une pizza
 */ 
router.put('/:id', (req, res) => {
    pizza.findOneAndUpdate({_id: req.params.id}, {
        name            : req.body.name,
        price           : req.body.price,
        description     : req.body.description,
        img             : req.body.img,
        ingredient      : req.body.ingredient_ids,
        created_at      : req.body.created_at,
        updated_at      : req.body.updated_at
        
    }, {new: true}, (err,doc) => {
       if (err) { 
           throw err; 
       } else { 
           res.json(doc);
       }
    });
});

/**
 * @function delete
 * @param {String} prend le chemin racine de l'api _id de la pizza 
 * @description Permet de supprimer une pizza 
 */ 
router.delete('/:id', (req, res) => {
    pizza.findOneAndRemove({_id : req.params.id}, (err,doc)=>{
        if(err){
            throw err;
        }else{
            res.json(doc);
        }
    });
});

module.exports = router;