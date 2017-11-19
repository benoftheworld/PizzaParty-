'use strict';

/**
 * @file ingredientControllerSpec.js
 * @module ingredientControllerSpec
 * 
 * @desc Tests unitaire du controller ingredient
 * 
 * @version Alpha 1.0.0
 * 
 * @author Benjamin MARTIN <benjamin.martin@ynov.com>
 */


/**
 * Require Module
 */ 
const chai            = require('chai');
const expect          = require('chai').expect;
const chaiHttp        = require('chai-http');
const should          = chai.should();
const mongoose        = require('mongoose');

chai.use(chaiHttp);

describe('testsIngredientController', () => {
    
    /**
     * Aavant les tests on ouvre la connexion à la bdd
     */ 
    before(function() {
        mongoose.createConnection('mongodb://localhost/test');
    });
 
    /**
     * A la fin des tests on ferme la connection à la bdd
     */ 
    after(function() {
        mongoose.connection.close();
    });
    
    /**
     * Avant chaque test 
     */
    beforeEach(() => { 
        let self = this; 
        self.server = "https://pizzaparty-benoftheworld.c9users.io:8080/ingredient";
        self.path = "/"; 
    });
    
    /**
     * Test get all ingredients
     */
    it("should return all ingredient", function(done){
        let self = this; 
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/ingredient")
            .get('/')
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    /**
     * Test get by ID
     */
    it("should return a ingredient by ID", function(done){
        let self = this; 
        let ingredientID = "5a11e1d8160a7152b7070385";
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/ingredient")
            .get('/'+ingredientID)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    /**
     * Test Post a ingredient
     */

    it('should post a new ingredient', (done) => {

        let ingredient = {
            name: "tomate",
            price: 3,
            weight: 3,
            created_at: "19112017",
            updated_at: "19112017",
        }
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/ingredient")
            .post('/')
            .send(ingredient)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    
    /**
     * Test Put a ingredient
     */ 
    it('should update a ingredient', (done) => {
        
        let ingredientID = "5a11e1d8160a7152b7070385";
        let ingredient = {
            name: "fromage",
            price: 7,
            weight: 5,
            created_at: "19112017",
            updated_at: "19112017",
        }
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/ingredient")
            .put('/'+ingredientID)
            .send(ingredient)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    /**
     * Test Delete a ingredient
     */ 
    it('should delete a ingredient', (done) => {
        
        let ingredientID = "5a11e1d8160a7152b7070385";
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/ingredient")
            .delete('/'+ingredientID)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    
});