var Nightmare = require("nightmare");

//var expect = require("chai").expect;
var nightmare = Nightmare ({show: true});


nightmare
    .goto("http://localhost:3000/login")
    .type("#login-username", "ejensen")
    .type("#login-password", "eric1234")
    .exists("#form-btn")
    .click("#form-btn")
    .wait(5000)
    .end()
    .then(function(result){
        console.log(result, "logged in")
    })
    .catch(function(error){
        console.log(error)
    });