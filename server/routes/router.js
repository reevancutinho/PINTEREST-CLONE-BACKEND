const express = require('express');
const route=express.Router();

const services=require('../services/render');
const controller=require('../controller/controller');

//home route
route.get("/",services.homeRoute)

//add pin route
route.get("/add-pin",services.add_pin)

//update pin route
route.get("/update-pin",services.update_pin)

//API route
route.post('/api/pins',controller.create);
route.get('/api/pins',controller.find);
route.put('/api/pins/:id',controller.update);
route.delete('/api/pins/:id',controller.delete);

module.exports = route