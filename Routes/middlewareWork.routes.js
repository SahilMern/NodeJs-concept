const express = require("express");
const { handleMiddleware } = require("../controllers/middlewareWork");
const { practiceMiddleware } = require("../middleware/practice");
const router= express.Router()

router.post("/handleMiddleware",practiceMiddleware ,handleMiddleware)

module.exports = router;