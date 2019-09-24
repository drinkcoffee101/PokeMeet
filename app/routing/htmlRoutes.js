var path = require("path");

// const { app, connection } = require("../../server.js");

// import {findMatch, formatScore} from 'friends.js';

// const { findMatch, formatScore } = require('./friends.js');

module.exports = (app, connection) => {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  app.get("/api/trainers", (req, res) => {
    connection.query("SELECT * FROM trainers ORDER BY id", (err, data) => {
      if (err) throw err;
      res.json(data);
      console.log(data[0].attr);
    });
  });

  app.get("/api/questions", (req, res) => {
    connection.query("SELECT * FROM questions ORDER BY id", (err, data) => {
      if (err) throw err;
      res.json(data);
    });
  });

  app.post('/api/trainers', (req, res) => {
    var newAnswers = req.body;
    // console.log(newAnswers);
    // res.json(newAnswers);
    findMatch(formatScore(newAnswers.attr), (data) => {
      res.json(data);
      console.log(data)
    });
  })

  let findMatch = (userScore, cb) => {
    connection.query("SELECT * FROM trainers ORDER BY id", (err, data) => {
      if (err) throw err;

      // console.log(data)
      var match = {}
      //1st match will always be 'a match' if the difference is below 100
      var matchTotal = 100;
      data.forEach(user => {
        //calc the attr total of each past user and compare to the new user
        var tempMtachTotal = Math.abs(formatScore(user.attr) - userScore)
        if (tempMtachTotal < matchTotal) {
          matchTotal = tempMtachTotal;
          match = user;
        }
      });
      cb(match);
    });
  }

  let formatScore = (str) => {
    var userScore = str.split(',').map(Number);
    var total = userScore.reduce((acc, curr) => acc + curr, 0);
    return total;
  }

}

// let findMatch = (userScore, cb) => {
//   connection.query("SELECT * FROM trainers ORDER BY id", (err, data) => {
//     if (err) throw err;

//     // console.log(data)
//     var match = {}
//     //1st match will always be 'a match' if the difference is below 100
//     var matchTotal = 100;
//     data.forEach(user => {
//       //calc the attr total of each past user and compare to the new user
//       var tempMtachTotal = Math.abs(formatScore(user.attr) - userScore)
//       if (tempMtachTotal < matchTotal) {
//         matchTotal = tempMtachTotal;
//         match = user;
//       }
//     });
//     cb(match);
//   });
// }

// let formatScore = (str) => {
//   var userScore = str.split(',').map(Number);
//   var total = userScore.reduce((acc, curr) => acc + curr, 0);
//   return total;
// }
