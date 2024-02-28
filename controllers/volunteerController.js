const mongoose = require("mongoose");
const volunteerModel = require("../models/volunteerModel.js");
const coreModel = require("../models/coreModel.js");
const createCore = async (req, res) => {
  try {
    const newMember = new coreModel(req.body);
    await newMember.save();
    res.status(201).json({ message: "Member added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createVolunteer = async (req, res) => {
  try {
    const newMember = new volunteerModel(req.body);
    await newMember.save();
    res.status(201).json({ message: "Member added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getAllVolunteer = async (req, res) => {
  try {
    const members = await volunteerModel.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAllCore = async (req, res) => {
  try {
    const members = await coreModel.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { createCore, createVolunteer, getAllVolunteer, getAllCore };