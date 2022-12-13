const router = require('express').Router();
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const path = require('path');
const Users = require('./model');

router.get('/api/users', function(req, res){
    //Check if all fields are provided and are valid:
    Users.find({})
    .then(users => {
        res.status(200);
        res.json(users);        
    })
    .catch(err=>next(err));
 });

 router.post('/api/users',function(req, res){
    //Check if all fields are provided and are valid:
    const di = req.body;
    let D = new Date();
    D.setMonth(D.getMonth()+1);
    let l =D.toString();
    Users.create({
        Name: di.Name,
        Mail: di.Mail,
        Age: di.Age,
        Expiration: l,
        Session: di.Session
    })
    .then(users => {
        res.status(200);
        res.json(users);        
    })
    .catch(err=>{
        res.status(403);
        console.log(err)
        res.json(err);
    });
 });

 router.get('/api/users/:Mail', function(req, res){
    console.log(req.params.Mail)
    //Check if all fields are provided and are valid:
    Users.findOne({Mail: req.params.Mail})
    .then(users => {
        res.status(200);
        res.json(users);        
    })
    .catch(err=>{
        res.status(403);
        res.json(err);
    });
 });

//  router.post('/api/users/:Mail', function(req, res){
//     //Check if all fields are provided and are valid:
//     Users.findOne({Mail: req.params.Mail})
//     .then(users => {
//         if(users == null){
//             res.status(403);
//             res.json({Message: 'No such user'});
//             return null;
//         }
//         const k = new Date(users.Expiration);
//         if(new Date() > k){
//             let l = new Date();
//             l.setMonth(l.getMonth()+1);
//             users.Expiration = l.toString();
//         }      
//         users.save()
//         .then(us=>{
//             res.status(200);
//             res.json(users);
//         })
//         .catch(err=>{
//             res.status(403);
//             res.json(err);
//         });
//     })
//     .catch(err=>{
//         res.status(403);
//         res.json(err);
//     });
//  });

module.exports=router;