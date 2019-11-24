// const utils = require('./utils');
const _ = require('lodash');
const yargs = require('yargs');
const calc = require('./calc.js');
const fs = require('fs');

// const someArray = ['ala', 3, 'ma', 'kota', 2, 'ala', 'kota', 'ala'];
// const funcResult = _.uniq(someArray);
// console.log(someArray);
// console.log(funcResult);

// const tabA = ['ala', 'ma', 'kota'];
// const tabB = ['ala', 'ma', 'psa'];

// console.log(utils.diff(tabA, tabB));
// console.log(utils.diff(tabB, tabA));

// console.log(_.difference(tabA, tabB));
// console.log(_.difference(tabB, tabA));

// /*
// const someArray = [3, 5, -20, -1002, 234, 542, 6, 23, -3, 8];
// const minValue = _.min(someArray);
// const maxValue = _.max(someArray);

// console.log('min:', minValue);
// console.log('max:', maxValue);


// console.log('aplikacja uruchomiona za pomocą nodemon');

// console.log('works?! yay! its works!!!!');

// console.log(yargs.argv);
// console.log(calc.multi(5, 5));


let a = yargs.argv.a;
let b = yargs.argv.b;
let name = yargs.argv.name;

console.log(typeof (a), typeof (b));



let operator = yargs.argv.operator;
console.log(typeof (operator));

let writeToFile = function (result) {
    console.log(result);
    fs.writeFile(name, result, function (error) {
        console.log(error);
    })
}

switch (operator) {
    case '*':
        calc.multi(a, b, writeToFile)
        break;
    case '/':
        calc.div(a, b, writeToFile)
        break;
    case '+':
        calc.add(a, b, writeToFile)
        break
    case '-':
        calc.sub(a, b, writeToFile)
        break;
    default:
        break;
}


const os = require('os');
const user = os.freemem();

console.log(user);


setTimeout(() => {
    console.log("Hello " + user.username)
}, 5000);

fs.writeFileSync('nazwa_uzytkownika.txt', user.username);





let request = require('request');

let city = yargs.argv.city;
let url = `https://api.openweathermap.org/data/2.5/weather?APPID=0ed761300a2725ca778c07831ae64d6e&q=${city}&units=metric`

request(url, function (error, response, body) {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', JSON.parse(body));
