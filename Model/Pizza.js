'use strict';

/**
 * @file Pizza.js
 * @module PizzaSchema
 * 
 * @desc Class Pizza
 * 
 * @version Alpha 1.0.0
 * 
 * @author Benjamin MARTIN <benjamin.martin@ynov.com>
 */

/**
 * @requires Schema
 */ 
 
const mongoose   = require('mongoose');
const Ingredient = require('../Model/Ingredient');
const Schema     = mongoose.Schema;

/**
 * @class PizzaSchema
 * @param {String} name - Nom de la pizza
 * @param {string} price - Prix de la pizza
 * @param {String} desc - Description de la pizza
 * @param {String} img - Image de la pizza stocké en base 64
 * @param {Date} created_at - Date de création de la pizza
 * @param {Date} updated_at - Date de mise à jour de la pizza
 * @return {Schema}
 */ 
var PizzaSchema = new Schema({
   name: {
        type: String, 
        trim: true,
        uniq: true, 
    }, 
    price: {
        type: Number, 
        trim: true
    },
    description: {
        type: String, 
        trim: true
    },
    img: {
        type: String, 
        trim: true,
    },
    ingredient_ids:[{
        type: Schema.Types.ObjectId, ref: 'Ingredient', 
        trim: true,
    }],
    created_at: {
        type: String, 
        trim: true,
    },
    updated_at: {
        type: String, 
        trim: true,
    }
});

module.exports = mongoose.model('Pizza', PizzaSchema);
