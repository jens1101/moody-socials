const express = require('express');
const User = require('../core/user');
const router = express.Router();


const user = new User();

router.post('/login', (req, res, next) => {
    
    user.login(req.body.email, req.body.password, function(result) {
        if(result) {
           
            req.session.user = result;
            req.session.opp = 1;
          
            res.redirect('/home');
        }else {
           
            res.send('Username/Password incorrect!');
        }
    })

});

router.post('/register', (req, res, next) => {
   
    let userInput = {
        username: req.body.username,
        password: req.body.password
    };
   
    user.create(userInput, function(lastId) {

        if(lastId) {
           
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/home');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});

router.get('/loggout', (req, res, next) => {
  
    if(req.session.user) {
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;