const express = require('express');
const dotenv=require('dotenv');//so that we can hide our port
const morgan= require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const app=express();

const connectDB=require('./server/database/connection');

//this will help to get port from config file
dotenv.config({path:'config.env'})
//if mentioned port number is not there then by default 8080 will be the port number
const PORT=process.env.PORT||5000;

//log requests 
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parse requests to body parser
app.use(bodyparser.urlencoded({extended:true}))

//set view engine
app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assets
app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.use('/img',express.static(path.resolve(__dirname,"assets/img")))
app.use('/js',express.static(path.resolve(__dirname,"assets/js")))

//load routers
app.use('/', require('./server/routes/router'))

//start the port at given port number
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)});