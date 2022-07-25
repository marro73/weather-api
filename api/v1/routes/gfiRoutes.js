const express = require("express");
const gfiController = require("../../controllers/gfiController");
const router = express.Router();

router.get("/", gfiController.getGFIByStation);
module.exports = router;
