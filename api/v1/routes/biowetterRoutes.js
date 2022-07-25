const express = require("express");
const biowetterController = require("../../controllers/biowetterController");
const router = express.Router();

router.get("/", biowetterController.getBioWetter);
module.exports = router;
