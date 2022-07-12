const db = require("../models");
const Surveyquestionanswers = db.surveyquestionanswers;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surveyquestionanswerText) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a survey
  const surveyquestions = {
    surveyquestionanswer_text: req.body.surveyquestionanswerText,
    surveyquestionsId:req.body.surveyquestionsId
  }
}