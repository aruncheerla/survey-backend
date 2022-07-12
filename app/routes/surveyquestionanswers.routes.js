module.exports = app => {
    const surveyquestionanswers = require("../controllers/surveyquestionanswers.controller.js");
    var router = require("express").Router();
    app.use('/api/surveyquestionanswers', router);
  };