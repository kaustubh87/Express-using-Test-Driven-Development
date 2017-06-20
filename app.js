var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(req,res){
    res.send('Hello World');
});



app.get('/cities', function(req,res){
    var cities = ['Lotopia', 'Caspiana', 'Indigo'];
    res.json(cities);
});

app.listen(3000, function(){
    console.log('Server running at 3000');
});


module.exports = app;