



// const { app, connection } = require("../../server.js");

// module.exports = (connection) => {}

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


// export {findMatch, formatScore};
module.exports = { findMatch, formatScore };










