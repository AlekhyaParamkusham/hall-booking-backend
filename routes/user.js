const { Router } = require("express");
const express = require("express");
const router = express.Router();
const user = require("./../controllers/user");

router.route("/").get(user.getAllUsers);
router.route("/").post(user.createUser);

router.route("/:id").get(user.getUser);
router.route("/:id").patch(user.updateUser);
router.route("/:id").delete(user.deleteUser);

module.exports = router;
