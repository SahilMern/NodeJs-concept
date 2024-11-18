const fs = require("fs");

try {
  // 1. Write to a file (asynchronously)
  fs.writeFile('example.txt', 'Hello, World!', 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }
    console.log("Data written to file (Async)");

    // 2. Read the file (asynchronously)
    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
        return;
      }
      console.log(data, "Data read from file (Async)");

      // 3. Append data to the file (asynchronously)
      fs.appendFile('example.txt', '\nAppended text!', 'utf8', (err) => {
        if (err) {
          console.error('Error appending data:', err);
          return;
        }
        console.log("Data appended to file (Async)");

        // 4. Check if the file exists (asynchronously)
        fs.access('example.txt', fs.constants.F_OK, (err) => {
          if (err) {
            console.log('File does not exist (Async)');
          } else {
            console.log('File exists (Async)');
          }

          // 5. Delete the file (asynchronously)
          fs.unlink('example.txt', (err) => {
            if (err) {
              console.error('Error deleting the file:', err);
              return;
            }
            console.log("File deleted (Async)");
          });
        });
      });
    });
  });
} catch (err) {
  console.error("Error occurred during file operation (Async):", err);
}
