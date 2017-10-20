'use strict'; 

const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 

const PizzaSchema = new Schema({
    name: {
        type: String, 
        required: true, 
        trim: true
    }, 
    price: {
        type: String, 
        required: true, 
        trim: true
    },
    description: {
        type: String, 
        required: true, 
        trim: true
    },
    img: {
        type: String, 
        required: true, 
        trim: true
    }
}); 

module.exports = mongoose.model('Pizza', PizzaSchema);