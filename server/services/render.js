const axios=require('axios');

exports.homeRoute=(req,res)=>{
    axios.get(`http://localhost:${process.env.PORT}/api/pins`)
    .then(function(response){
        res.render('index', { pins : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_pin=(req,res)=>{
    res.render('add_pin');
}

exports.update_pin=(req,res)=>{

    res.setHeader("Access-Control-Allow-Origin", "*")
res.setHeader("Access-Control-Allow-Credentials", "true");
res.setHeader("Access-Control-Max-Age", "1800");
res.setHeader("Access-Control-Allow-Headers", "content-type");
res.setHeader( "Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS" ); 


    axios.get(`http://localhost:${process.env.PORT}/api/pins`, { params : { id : req.query.id }})
    .then(function(pinsdata){
        res.render("update_pin", { pin : pinsdata.data})
    })
    .catch(err =>{
        res.send(err);
    })
}