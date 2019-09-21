const {app, connection} = require("/PokeMeet/app/server.js");



app.get("/api/trainers", function(req, res) {
    connection.query("SELECT * FROM trainers ORDER BY id", function (err, data) {
        if (err) throw err;
        res.json(data);
    });
  });