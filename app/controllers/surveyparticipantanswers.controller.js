const db = require("../models");
const Surveyparticipantanswers = db.surveyparticipantanswers;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surveyparticipantanswerText) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a survey
  const surveyquestions = {
    surveyparticipantanswer_text: req.body.surveyparticipantanswerText,
    surveyquestionsId:req.body.surveyquestionsId,
    surveyquestionanswersId:req.body.surveyquestionanswersId
  }
}