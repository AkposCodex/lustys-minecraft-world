var fs = require('fs');
const { exit } = require('process');
var files = fs.readdirSync('public/showcase');
// console.log(files)

var increment = 0

var cameraRoll = JSON.stringify(files)

// console.log(cameraRoll)
// fs.writeFile("cameraRoll.json", cameraRoll, function (err, result) {
//     if (err) console.log('error', err);
// })

for (log in cameraRoll) {
    // console.log(cameraRoll[log])
    var print = cameraRoll[log].split(",")
    // if (cameraRoll[log].includes(',')){
    // }
    // console.log(cameraRoll.length)
    console.log(print)
}

