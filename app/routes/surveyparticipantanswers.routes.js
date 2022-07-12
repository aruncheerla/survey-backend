module.exports = app => {
    const surveyquestionanswers = require("../controllers/surveyparticipantanswers.controller.js");
    var router = require("express").Router();
    app.use('/api/surveyparticipantanswers', router);
  };