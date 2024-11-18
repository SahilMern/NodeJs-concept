const fs = require("fs");

// Synchronously write data to a file
try {
  //?Write File
    fs.writeFileSync('example.txt', 'Hello, World!', 'utf8');

  //?Read File
    const data = fs.readFileSync("example.txt", "utf-8");
    console.log(data, "Data written to file (Sync)");

  //? Synchronously append data to a file
    fs.appendFileSync("example.txt", "\nAppended text!", "utf-8");
    console.log("Data appended to file (Sync)");

  //? Synchronously delete a file
  fs.unlinkSync("example.txt");
  console.log("File deleted (Sync)");

  if (fs.existsSync('example.txt')) {
    console.log('File exists (Sync)');
  } else {
    console.log('File does not exist (Sync)');
  }
} catch (err) {
  console.error("Error writing the file (Sync):", err);
}

// When working with file systems in Node.js, using utf8 ensures that text files are correctly encoded and decoded
