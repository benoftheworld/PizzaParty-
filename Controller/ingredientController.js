"use strict";

/**
 * @file ingredientController.js
 * @module ingredientController
 * 
 * @desc Controlleur des ingredients
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
const ingredient = require('../Model/Ingredient');

/**
 * @function get
 * @param {String} prend le chemin racine de l'api
 * @description Permet de récuperer les informations de tous les Ingredients
 */ 
router.get('/', (req, res, next) => {
    ingredient.find({}, (err, doc) =>{
        console.log(err, doc);
        res.json(doc);
    });
});

/**
 * @function get by id
 * @param {String} prend le chemin racine de l'api + _id de l Ingredient
 * @description Permet de récupérer les informations d'un Ingredient
 */ 
router.get('/:id', (req, res) => {
    console.log(req.params);
    ingredient.find({ _id: req.params.id }, (err, doc) => {
        if(err){
            console.error(err);
        } else {
            console.log(doc);
            res.json(doc);
        }
    });
});


/**
 * @function post
 * @param {String} prend le chemin racine de l'api
 * @description Permet de save un ingredient
 */
router.post('/', (req, res) => {
    let newIngredient = new ingredient({ 
            name: req.body.name, 
    });
    newIngredient.save( (err, doc)=> {
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
 * @param {String} prend le chemin racine de l'api + _id de l ingredient 
 * @description Permet de mettre à jour un ingredient
 */ 
router.put('/:id', (req, res) => {
    ingredient.findOneAndUpdate({_id: req.params.id}, {
        name            : req.body.name,
    }, {new: true}, (err,doc) => {
       if (err) { 
           throw err; 
       } else { 
           console.log("Update"); 
           res.json(doc);
       }
    });
});

/**
 * @function delete
 * @param {String} prend le chemin racine de l'api _id de l ingredient 
 * @description Permet de supprimer un ingredient 
 */ 
router.delete('/:id', (req, res) => {
    ingredient.findOneAndRemove({_id : req.params.id}, (err,doc)=>{
        if(err){
            throw err;
        }else{
            console.log("Delete");
            res.json(doc);
        }
    });
});

module.exports = router;