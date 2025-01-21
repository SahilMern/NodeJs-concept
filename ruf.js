const fs = require("fs")
const readableStream  = fs.createReadStream("stream.txt", "utf-8")

readableStream.on("data", (chunk) => {
    console.log(chunk, "chunk data");
    
})

readableStream.on("end", () => {
    console.log('File reading completed!');
})

readableStream.on('error', (err) => {
    console.error('Error reading file:', err);
});
