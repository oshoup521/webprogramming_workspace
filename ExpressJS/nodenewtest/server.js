var express = require('express')
var path = require('path')
var app = express()


app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000);


