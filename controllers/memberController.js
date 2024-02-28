const memberModel = require("../models/memberModel.js");

const createMember = async (req, res) => {
  try {
    const memberData = req.body;
    const newMember = new memberModel(memberData);
    const saveMember = await newMember.save();
    res.status(200).json({
      success: true,
      message: "Successfully member is created",
      saveMember,
    });
  } catch (error) {
    console.log("Error during event creation:", error); // Log the error to the console
    res.status(403).json({
      success: false,
      message: "Something went wrong, creation unsuccessful",
      error: error.message, // Send the error message in the response
    });
  }
};

module.exports = { createMember };
