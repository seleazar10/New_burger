var express = require('express');
var methodOverride = require('method-override');
// var mysql = require('mysql'); 
var bodyParser = require('body-parser');
var exphbs= require('express-handlebars');
var routes = require('./controllers/burgers_controller')


PORT = process.env.PORT || 9001
var app = express()

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')


app.use(routes);

app.listen(PORT, function(err){
    if(err) throw err;
    console.log('connected: '+ PORT)
});