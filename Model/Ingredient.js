'use strict';

/**
 * @file Ingredient.js
 * @module PizzaSchema
 * 
 * @desc Class Ingredient
 * 
 * @version Alpha 1.0.0
 * 
 * @author Benjamin MARTIN <benjamin.martin@ynov.com>
 */

/**
 * @requires Schema
 */ 
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * @class IngredientSchema
 * @param {String} name - Nom de l'ingredient
 * @param {Date} created_at - Date de création de l ingredient
 * @param {Date} updated_at - Date de mise à jour de l ingredient
 * @return {Schema}
 */ 
const Ingredient = new Schema({
    name : {
        type: String, 
        uniq: true, 
        required: true 
    },
    weight : {
        type: String, 
    },
    price : {
        type : Number,
    },
    created_at : { 
        type: Date,
    },
    updated_at : { 
        type: Date,
    },
});

module.exports = mongoose.model('Ingredient', Ingredient);