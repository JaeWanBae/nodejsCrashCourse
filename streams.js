const fs = require('fs');

// encoding utf8 turns the buffer to readable format
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// listening to a data event
// readStream.on('data', (chunk) => {
//     console.log('----------------NEWCHUNK-------------');
//     console.log(chunk);

//     // everytime we get a new chunk of data, it writes the data to the new txt doc
//     writeStream.write('\nNEWCHUNK\n');
//     writeStream.write(chunk);
// })

// piping
// does the same thing as the .write() but much easier
readStream.pipe(writeStream);