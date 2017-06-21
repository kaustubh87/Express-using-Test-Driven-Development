var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('public'));
var urlencoded = bodyParser.urlencoded({ extended: false});

app.get('/', function(req,res){
    res.send('Hello World');
});

 var cities = {
        'Lotopia': 'description1',
        'Caspiana': 'description2', 
        'Indigo': 'description3' 
       };

app.get('/cities', function(req,res){
    
   

    res.json(Object.keys(cities));

});

app.post('/cities', urlencoded, function(req,res){
    var newCity = req.body;
    cities[newCity.name] = newCity.description;
    res.status(201).json(newCity.name);
});

app.listen(3000, function(){
    console.log('Server running at 3000');
});




module.exports = app;