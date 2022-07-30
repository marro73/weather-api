const express = require("express");
const uviController = require("../../controllers/uviController");
const router = express.Router();

router.get("/", uviController.getUVIByStation);
router.get("/all", uviController.getUVIAll);
module.exports = router;
