const { Router } = require("express");
const express = require("express");
const router = express.Router();
const hall = require("./../controllers/hall");

router.route("/").get(hall.getAllHalls);
router.route("/").post(hall.createHall);

router.route("/:id").get(hall.getHall);
router.route("/:id").patch(hall.bookHall);
router.route("/:id").delete(hall.deleteHall);

module.exports = router;
