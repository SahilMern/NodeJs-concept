const fs = require("fs");
// Check if the file exists before reading it
if (!fs.existsSync("stream.txt")) {
    console.log("The file does not exist!");
    process.exit(1);  // Exit the program if the file doesn't exist
}

const readStream = fs.createReadStream("stream.txt", "utf-8");

readStream.on("data", (data) => {
  console.log(data);  // Successfully read data
});

readStream.on("error", (error) => {
  console.log("Error occurred:", error);
});
