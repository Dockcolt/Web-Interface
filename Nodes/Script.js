const express = require('express');
var mysql = require('mysql');
const path = require("path");
const app = express();

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../htmlFiles', 'index.html'));
})

// Creating connection for mysql
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'artgallery'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/display', function(request, response){
    con.query("SELECT A.name FROM artist A", function(err, results, fields){
        if(err) throw err;
        response.send(results);
    });
    //response.sendFile(path.join(__dirname, '../htmlFiles', 'display.html'));
})



app.listen('3000', function(){
    console.log('Listening to port 3000');
})

