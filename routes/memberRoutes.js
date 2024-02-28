const express = require("express");
const { createMember } = require("../controllers/memberController");

const router = express.Router();

router.post("/create-member", createMember);

module.exports = router;
