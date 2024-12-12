const cluster = require('cluster');
const http = require('http');
const os = require('os');

// Get the number of CPU cores available
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    // Master process: Create a worker for each CPU core
    console.log(`Master process is running on PID: ${process.pid}`);
    
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork(); // Create a worker process
    }

    // Handle worker deaths
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
    });
} else {
    // Worker process: Handle incoming requests
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello, Node.js Cluster!');
    }).listen(8000);

    console.log(`Worker process is running on PID: ${process.pid}`);
}
