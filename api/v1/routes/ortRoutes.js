const express = require("express");
const ortController = require("../../controllers/ortController");
const router = express.Router();

router.get("/sbc", ortController.getStateByCity);
router.get("/sbp", ortController.getStateByPlz);
router.get("/dbc", ortController.getDisByCity);
router.get("/dbp", ortController.getDisByPlz);

module.exports = router;
