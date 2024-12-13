console.log("JAI SHREE RAM JI / JAI BAJARANG BALI JI");

const express = require("express");
const app = express();
const port = 3000;

require("./Db/connection/config");
// const aggrigation = require("./Routes")
const nodemethod = require("./Routes/method.routes");
app.use("/api/v1", nodemethod);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
