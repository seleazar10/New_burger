var express = require('express');
var methodOverride = require('method-override');
var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var exphbs= require('express-handlebars');

var app = express()

PORT = process.env.PORT || 9001

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.listen(PORT, function(err){
    if(err) throw err;
    console.log('connected: '+ PORT)
});