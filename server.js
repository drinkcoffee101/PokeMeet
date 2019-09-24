var express = require("express");
// Set up MySQL connection.
var mysql = require("mysql");

var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

require('./app/routing/htmlRoutes')(app);


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname + 'app/public')));


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Bluestone101!",
    database: "pokeTrainers_db"
});

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});


module.exports = {app, connection};
