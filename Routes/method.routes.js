const express = require("express");
const { cursormethod, comparison, logical, updateDocument } = require("../controllers/method.controller");
const router = express.Router()


router.post("/cursormethod", cursormethod );
router.post("/comparison", comparison );
router.post("/logical", logical );
router.post("/updateDocument/:id", updateDocument)



module.exports = router;