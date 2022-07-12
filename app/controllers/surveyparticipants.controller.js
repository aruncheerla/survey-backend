const db = require("../models");
const Surveyparticipants = db.surveyparticipants;
const Op = db.Sequelize.Op;
// Create and Save a new Track
exports.create = (req, res) => {
  // Validate request
  if (!req.body.surveyName) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a survey
  const surveyparticipants = {
    surveyparticipants_email: req.body.surveyName,
    surveyparticipants_firstname:req.body.surveyDescription,
    surveyparticipants_lastname:req.body.surveyIntroparagraph,
    surveyparticipants_demographics:req.body.surveyStartdate,
    surveyId:req.body.surveyId
  }
}