// in node, global object is global not window

// console.log(global)

// global.setTimeout(() => {
//     console.log("timeout")
// }, 3000);

// just like JS in browser, you dont have to state global to run the method

// setTimeout(() => {
//         console.log("timeout")

//         // clears the interval
//         clearInterval(int);
//     }, 3000);

// const int = setInterval(() => {
//     console.log("interval")
// }, 1000);

// absolute path of the directory
console.log(__dirname);

// absolute path of the directory with the file name
console.log(__filename);