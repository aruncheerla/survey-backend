module.exports = app => {
    const surveyquestions = require("../controllers/surveyquestions.controller.js");
    var router = require("express").Router();
    app.use('/api/surveyquestions', router);
  };