const fs = require("fs");

// Create a writable stream
const writeStream = fs.createWriteStream("stream.txt");

// Handle errors
writeStream.on('error', (err) => {
    console.error("Error occurred while writing to the stream:", err.message);
});

// Write some data to the stream
writeStream.write("Hey I am trying to create write Stream\n");
writeStream.write("Hey I am trying to create 2nd write Stream\n");

// Listen for the 'finish' event after the stream ends
writeStream.end(); // End the writable stream
writeStream.on('finish', () => {
    console.log("Stream created successfully");
});
