const express = require("express");
const app = express();
const port = 9080;
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");

app.use(helmet());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 15 minutes
  max: 2, // limit each IP to 2 requests per windowMs
  message: "Too many requests from this IP, please try again after 15 minutes",
});

app.use(limiter);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
