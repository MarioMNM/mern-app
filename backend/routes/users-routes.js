const express = require("express");

const usersControllers = require("../controllers/users-controllers");

const router = express.Router();

router.get("/", usersControllers.getUsers);

router.post("/login", usersControllers.login);

router.post("/signup", usersControllers.signup);

module.exports = router;
