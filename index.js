console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");
let cookieParser = require('cookie-parser')
const express = require("express");
const app = express();
const port = 9000;
app.use(cookieParser());
require("./Db/connection/config");
// const aggrigation = require("./Routes")
const nodemethod = require("./Routes/method.routes");
app.use("/api/v1", nodemethod);


// workingWithMiddleware 
const middlewareWorking = require("./Routes/middlewareWork.routes")
app.use("/api/middleware", middlewareWorking)

const cookieSetup = require("./Routes/cookieSetup.routes")
app.use("/api/cookie", cookieSetup)
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
