const express = require("express");
const { cursormethod } = require("../controllers/method.controller");
const router = express.Router()


router.post("/cursormethod", cursormethod )

module.exports = router;