const express = require("express");
const {
  createWorkController,
  getAllWorkController,
  getWorkController,
  getWorkFlow,
  saveChanges,
} = require("../controllers/workController");

const router = express.Router();

router.post("/create-work", createWorkController);

router.get("/get-all-work", getAllWorkController);

router.get("/get-work/:id", getWorkFlow);

router.get("/get-work/:slug", getWorkController);

router.post("/save-status-changes", saveChanges);

module.exports = router;
