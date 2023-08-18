const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.homePage);
router.get("/movie/:movieName", controller.gamePage);
router.get("/search", controller.searchPage);
router.get("/search/results", controller.resultPage);
module.exports = router;
