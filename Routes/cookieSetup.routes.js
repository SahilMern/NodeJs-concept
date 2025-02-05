const express = require("express");
const { cookieSetup } = require("../controllers/cookieSetup.controller");
const router = express.Router()


router.post("/cookieSetup", cookieSetup );



module.exports = router;