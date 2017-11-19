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
 * Get all ingredients
 */ 
router.get('/', (req, res, next) => {
    ingredient.find({}, (err, doc) =>{
        console.log(err, doc);
        res.json(doc);
    });
});

/**
 * Get One ingredient by id
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
 * Save one ingredient
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
 * Update one ingredient by id
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
 * Delete one ingredient by id
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