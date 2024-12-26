const express = require('express');
const fs = require("fs").promises;  // Use the promises API for async file handling
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    try {
        // const data = await fs.re("stram.txt");  // Using the async version
        // return res.end(data);  // Send the content of the file as the response


        const readableStream = fs.create
    } catch (err) {
        return res.status(500).json({ message: "Error reading file", error: err.message });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
