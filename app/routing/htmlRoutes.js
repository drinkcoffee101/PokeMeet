var path = require("path");

const {app, connection} = require("../server.js");

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/api/trainers", function(req, res) {
    connection.query("SELECT * FROM trainers ORDER BY id", function (err, data) {
        if (err) throw err;
        res.json(data);
    });
  });

  app.get("/api/questions", function(req, res) {
    connection.query("SELECT * FROM questions ORDER BY id", function (err, data) {
        if (err) throw err;
        res.json(data);
    });
  });



