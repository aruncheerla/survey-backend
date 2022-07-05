const db = require("../models");
const Surveyquestions = db.surveyquestions;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surveyquestionType) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a survey
  const surveyquestions = {
    surveyquestion_type: req.body.surveyquestionType,
    surveyquestion_text:req.body.surveyquestionText,
    surveyId:req.body.surveyId
  }
}