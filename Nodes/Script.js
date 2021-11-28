const express = require('express');
var mysql = require('mysql');
const path = require("path");
const app = express();

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../htmlFiles', 'index.html'));
})

app.get('*', function(request, response){
    response.send('404 page not found');
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

/*
con.query('Select A.* FROM artist A', (err, res) => {
    return console.log(res);
});
*/

app.listen('3000', function(){
    console.log('Listening to port 3000');
})

