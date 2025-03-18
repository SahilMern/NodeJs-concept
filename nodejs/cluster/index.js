
const express = require("express");
const app = express();

const cluster = require("cluster");
const os = require("os");

const numberOfCpus = os.cpus().length; // Number of CPU cores available

if (cluster.isMaster) {
  console.log(`Master process is running...`);
  console.log(`Forking ${numberOfCpus} workers...`);

  // Fork workers based on the number of CPU cores
  for (let i = 0; i < numberOfCpus; i++) {
    cluster.fork(); // Creates a new worker process
  }

  // Log when a worker dies (in case of failure or crash)
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
  });
} else {
  // Worker processes handle requests here
  const port = 9987;

  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  app.listen(port, () => {
    console.log(`Worker ${process.pid} is listening on port ${port}`);
  });
}