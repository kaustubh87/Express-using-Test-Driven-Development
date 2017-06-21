var express = require('express');
var app = express();
var bodyParser = require('body-parser');


app.use(express.static('public'));
var urlencoded = bodyParser.urlencoded({ extended: false});

app.get('/', function(req,res){
    res.send('Hello World');
});

var redis = require('redis');
var client = redis.createClient();

client.select((process.env.NODE_ENV || 'development').length);

client.hset('cities', 'Lotopia', 'description');
client.hset('cities', 'Caspiana', 'description');
client.hset('cities', 'Indigo', 'description');


app.get('/cities', function(req,res){
    client.hkeys('cities', function(error, citynames){
            res.json(citynames);
    });
});

app.post('/cities', urlencoded, function(req,res){
    var newCity = req.body;
    client.hset('cities', newCity.name, newCity.description, function(error){
        if(error) throw error;

    });
    cities[newCity.name] = newCity.description;
    res.status(201).json(newCity.name);
});


app.listen(3000, function(){
    console.log('Server running at 3000');
});




module.exports = app;