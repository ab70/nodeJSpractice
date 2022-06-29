//imports

const express = require('express')
const app = express();
const ejs = require('ejs')
const path = require('path')
const dotenv = require('dotenv')
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose')


//confiq
dotenv.config()
const PORT = process.env.PORT ||3100;
mongoose.connect(process.env.mongoLink,{useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection;
//db message
db.on('error',console.error.bind(console,'connection error'));
db.once('open',()=>{
    console.log('connected mongoose')
});
//serverSet
app.listen(PORT,()=>{
    console.log('connected server')
})
//set template engine
app.use(expressLayout);
//set public folder
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('views', path.join(__dirname,'/resources/views'));   //sets views path in folder
app.set('layout',path.join(__dirname,'/resources/views/layout'));   //sets layout path for express in folder
app.set('view engine','ejs');   
//includes routes(web.js)
require('./routes/web')(app);