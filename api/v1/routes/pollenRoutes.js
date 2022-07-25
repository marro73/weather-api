const express = require("express");
const pollenController = require("../../controllers/pollenController");
const router = express.Router();

router.get("/", pollenController.getPollenByStation);
router.get("/all", pollenController.getAllPollen);

module.exports = router;
