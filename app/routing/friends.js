



// // const { app, connection } = require("../../server.js");

// // module.exports = (connection) => {}

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


// // export {findMatch, formatScore};
// module.exports = { findMatch, formatScore };



let arr1 = [['A1', '0.959', 'Plate 1'], ['A2', '1.022', 'Plate 1'], ['A3', '0.680', 'Plate 1'], ['A1', '9999', 'Plate 2'], ['A2', '99992', 'Plate 2'], ['A3', '000', 'Plate 2']]

let arr2 = [['Plate 1', 'A1', 'pA08164', 113110.0], ['Plate 1', 'A2', 'pA08164', 113110.0], ['Plate 1', 'A3', 'pA08164', 113110.0], ['Plate 2', 'A1', 'pA08164', 90909], ['Plate 2', 'A2', 'pA08164', 5555510.0], ['Plate 2', 'A3', 'pA08164', 6776.0]]

let matchingVlaues = (arr1, arr2) => {
    var tempArr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i].includes(arr2[j][0]) && arr1[i].includes(arr2[j][1])) {
                tempArr = arr2[j].slice(2);
                 arr1[i] = arr1[i].concat(tempArr);
            }
        }
    }
}

matchingVlaues(arr1,arr2);

console.log(arr1);



