// the variable can be named whatever, but it will contain the object that was exported from people
// const xyz = require('./people');
// console.log(xyz.people, xyz.ages)

// importing people.js with destructuring
const {people, ages} = require('./people') ;

console.log(people, ages);

// importing built in operating system
const os = require('os');

// os.platform gives us the platform we are running on
// os.homedir gives us the home directory on the computer
console.log(os.platform(), os.homedir());