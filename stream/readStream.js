const fs = require("fs");
const readStream = fs.createReadStream("stream.txt", "utf-8");

readStream.on("data", (data) => {
  console.log(data);
});

readStream.on("error", (error) => {
  console.log(error, "error");
});
