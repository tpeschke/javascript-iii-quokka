var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum

// var sum = roundScores.reduce((prev,item, index, arr)=> prev + item)

// sum;
//Use the sum to get an average

var aveScore = roundScores.reduce(function (prev, item, index, arr) {
    return (prev + item)/arr.length;
})

aveScore;

//Handicap is 4
//Use a map to reduce all scores by 4
var handiScore = roundScores.map((num) => num - 4)

handiScore
//Use a reduce to get a sum
var sumHandi = handiScore.reduce((prev, item) => prev + item)

sumHandi

//Use the sum to get an average

var aveHandi = handiScore.reduce((prev, item, i, arr) => (prev + item)/arr.length)

aveHandi

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]

//Use reduce to go through the lyricWords and concatenate them together

var conWords = lyricWords.reduce((prev,item) => prev + item)

conWords