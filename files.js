// built in file system import
const { F_OK } = require('constants')
const fs = require('fs')

// reading files

// asynchronous function
// fs.readFile('./docs/blog1.txt', (err, data) => {
//     if (err) {
//         console.log(err);
//     }

//     // loads the buffer
//     // console.log(data);

//     // toString method turns the buffer to language we can read
//     console.log(data.toString());
// })

// reads this first because it takes some time to read the data of the file
// console.log('last line');

// write files
// takes in 3 argument, first being the path to the file, 2nd is what you want to write, 3rd is the call back function
// fs.writeFile('./docs/blog1.txt', 'hello world', () => {
//     console.log('file was written')
// })

// // creates file if the file in the path does not exist
// fs.writeFile('./docs/blog2.txt', 'hello again', () => {
//     console.log('file was written')
// })

// directories

// creates directories
// fs.existsSync checks whether the assets directory already exists or not
if (!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created')
    })
} else {
    // remove directory
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }

        console.log('folder deleted')
    })
}


// deleting files
// if statement to check if the file exists
if (fs.existsSync('./docs/deleteme.txt')) {
    // unlink deletes files
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
    })
    console.log('file deleted')
}