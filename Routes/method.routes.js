const express = require("express");
const { cursormethod, comparison, logical } = require("../controllers/method.controller");
const router = express.Router()


router.post("/cursormethod", cursormethod );
router.post("/comparison", comparison );
router.post("/logical", logical );



module.exports = router;