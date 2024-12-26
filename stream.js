const express = require('express');
const fs = require('fs');  // Use the regular fs module for streams
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {

        // const readableStream = fs.createReadStream('stream.txt', 'utf-8');
        // readableStream.pipe(res);

        
        //! READ DATA and WRITE DATA
        const readStream = fs.createReadStream("stream.txt");
        const writeStream = fs.createWriteStream("output.txt");

        // Pipe data from the readStream to writeStream
        // readStream.pipe(writeStream);

        // Optional: Log each chunk while reading and writing
        readStream.on("data", (chunk) => {
            console.log(chunk, "chunk");
        });

        // Handle the 'end' event for readStream to send a response
        readStream.on("end", () => {
            console.log("File has been copied successfully.");
            res.status(200).json({ message: "File copied successfully!" });
        });

        // Handle errors on the streams
        readStream.on("error", (err) => {
            console.error('Error reading file:', err);
            res.status(500).json({ message: "Error reading file", error: err.message });
        });

        writeStream.on("error", (err) => {
            console.error('Error writing file:', err);
            res.status(500).json({ message: "Error writing file", error: err.message });
        });

    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ message: "Unexpected error", error: err.message });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
