const fs = require('fs');
const transfromStream = require('stream');
let readStream = fs.createReadStream(__dirname + '/text.txt');
let outputStream = process.stdout;

// pipe syntax :- readStream.pipe(outputStream)

let middleStream = transfromStream.Transform({
    transform(chunk,enc,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB,1000);
    }
});

// readStream.pipe(outputStream)
let mstream = readStream.pipe(middleStream);
mstream.pipe(outputStream);