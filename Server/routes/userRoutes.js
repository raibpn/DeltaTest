const express = require("express");
const router = express.Router();
const {
  getUsers: getUsers,
  getUserById: getUserById,
} = require("../controller/userController");

router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;