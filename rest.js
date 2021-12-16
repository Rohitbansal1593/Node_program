var express = require('express');
var app = express();
var fs = require("fs");



// GET method

app.get('/', function (req, res) {

       res.end( "<h1>we are at my application<h1>" );
    });
app.get('/listUsers', function (req, res) {
   fs.readFile( "rest.json", 'utf8', function (err, data) {
      console.log( data );
      res.end(data);
   });
})
app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( "rest.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["user" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
 

// POST method
var user = {
    "user4" : {
       "name" : "kaka1",
       "password" : "password4",
       "profession" : "teacher",
       "id": 4
    }
 }
app.post('/addUser', function (req, res) {
    // First read existing users.
    fs.readFile("rest.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["user4"] = user["user4"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })


 // Delete method

 var id = 2;

app.delete('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile("rest.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" + id];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})