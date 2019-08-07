//GET, POST, PUT, DELETE
const express = require('express');
const routes = express.Router();

const DevController = require('./Controllers/DevController');


routes.get('/',(req,res)=>{
    return res.json({message:`Mensagem do routes! ${req.query.name}`});
});

routes.post('/devs',DevController.store);

module.exports = routes;
