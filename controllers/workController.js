const workModel = require("../models/workModel");
const slugify = require("slugify");

const createWorkController = async (req, res) => {
  try {
    const { name, work, volunteer } = req.body;
    if (!work) {
      return res.status(401).send({ message: "work is required" });
    }
    const category = await new workModel({
      name,
      work,
      volunteer,
      slug: slugify(work),
    }).save();
    res.status(201).send({
      success: true,
      message: "new work created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      errro,
      message: "Errro in Category",
    });
  }
};

const getAllWorkController = async (req, res) => {
  try {
    const work = await workModel.find({});
    res.status(200).send({
      success: true,
      message: "All Work List",
      work,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting all work",
    });
  }
};
const getWorkController = async (req, res) => {
  try {
    const work = await workModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get single work sucessfully",
      work,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error While getting Single work",
    });
  }
};

const getWorkFlow = async (req, res) => {
  const eventId = req.params.eventId;
  try {
    // Replace the following line with your actual logic to fetch work flow data
    const workFlow = await workModel.find({ eventId: eventId });
    res.json(workFlow);
  } catch (error) {
    console.error("Error fetching work flow:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const saveChanges = async (req, res) => {
  const { statusChanges } = req.body;

  try {
    // Assuming your Work model has a checked field
    // You should adjust this based on your actual data model
    await Promise.all(
      statusChanges.map(async ({ _id, checked }) => {
        await workModel.findByIdAndUpdate(_id, { checked });
      })
    );

    res.json({ success: true });
  } catch (error) {
    console.error("Error saving status changes:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = {
  createWorkController,
  getAllWorkController,
  getWorkController,
  getWorkFlow,
  saveChanges,
};
