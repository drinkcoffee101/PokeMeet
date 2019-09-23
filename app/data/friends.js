let formatUserScore = (str) => {
    var userScore = str.split(',').map(Number);

    var total = userScore.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    return total;
}




formatUserScore('1,1,1,1,1,1,1,1,1,1');
