let express = require('express');
let app = express();

let router = require('./routes/index')

let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let createError = require('http-errors');

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(bodyParser.urlencoded({extended : true}));


let mongoDb = 'mongodb://localhost:27017/my_database';

mongoose.connect(mongoDb, {useNewUrlParser : true}).then(function(resolve){
console.log('ready to use db');

}).catch(function(err){
console.log('error in connecting db');

});

app.use('/', router);

app.listen(3000, ()=>{
    console.log('3000');
});