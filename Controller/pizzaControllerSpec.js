'use strict';

/**
 * @file pizzaControllerSpec.js
 * @module pizzaControllerSpec
 * 
 * @desc Tests unitaire du controller pizza
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

describe('testsPizzaController', () => {
    
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
        self.server = "https://pizzaparty-benoftheworld.c9users.io:8080/pizza";
        self.path = "/"; 
    });
    
    /**
     * Test get all pizzas
     */
    it("should return all pizza", function(done){
        let self = this; 
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/pizza")
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
    it("should return a pizza by ID", function(done){
        let self = this; 
        let pizzaID = "5a11ec9cab911f69a6ad167f";
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/pizza")
            .get('/'+pizzaID)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    /**
     * Test Post a pizza
     */

    it('should post a new pizza', (done) => {

        let pizza = {
            name: "kebab",
            price: 8,
            description: "une pizza delicieuse au kebab",
            img: "image pizza",
            created_at: "19112017", 
            updated_at: "19112017", 
        }
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/pizza")
            .post('/')
            .send(pizza)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    
    /**
     * Test Put a pizza
     */ 
    it('should update a pizza', (done) => {
        
        
        let pizzaID = "5a11ec9cab911f69a6ad167f";
        let pizza = {
            name: "napolitaine",
            price: 9,
            description: "la classique napolitaines",
            img: "image pizza",
            created_at: "19112017", 
            updated_at: "19112017", 
        }
        
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/pizza")
            .put('/'+pizzaID)
            .send(pizza)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    /**
     * Test Delete a pizza
     */ 
    it('should delete a pizza', (done) => {
        
        let pizzaID = "5a11ec9cab911f69a6ad167f";
        chai.request("https://pizzaparty-benoftheworld.c9users.io:8080/pizza")
            .delete('/'+pizzaID)
            .then(done(), function(res){
                expect(res).to.have.status(200);
                expect(res).to.be.json;
            }, function (err) {
                console.log(err);
                throw err;
            })
    });
    
    
});
