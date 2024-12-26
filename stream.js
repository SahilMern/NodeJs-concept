const express = require('express');
const fs = require('fs');  // Use the regular fs module for streams
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    try {
        // Create a readable stream using the regular fs module (not fs.promises)
        const readableStream = fs.createReadStream('stream.txt', 'utf-8');
        
        // Pipe the readable stream to the response object to send the content
        readableStream.pipe(res);
        

    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ message: "Unexpected error", error: err.message });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
