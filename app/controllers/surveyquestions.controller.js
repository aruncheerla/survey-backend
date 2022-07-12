const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
var mysql = require('mysql');
const util = require('util');

var con = mysql.createConnection({
  host: "survey-db.cekydkanjmcc.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "surveyadmin",
  database: "survey_details"
});

const query = util.promisify(con.query).bind(con);

// Create and Save a new Artist
const createQuestion = async (req, res) => {
  const { surveyId, description, questionType, questionName, optionDetails, answer } = req.body;

  try {
    console.log("here in create que");
    const todayDate = new Date();

    const insertRecord = await query(`INSERT into survey_details.question_details
    (survey_id,description,question_type,question_name,option_details,answer)values
    ('${surveyId}','${description}','${questionType}','${questionName}','${optionDetails}','${answer}') `);

    console.log("insertRecord", insertRecord);

    if (insertRecord.affectedRows === 1) {
      return res.send({ resultCode: 200, resultMessage: "Added Question", questionId: insertRecord.insertId });
    }
    return res.send({ resultCode: 201, resultMessage: "Something went wrong" });

  } catch (error) {
    throw error;
  }
};

const questionListBySurveyId = async (req, res) => {
  const { surveyId } = req.body;

  try {
    const result = await query(`SELECT * from survey_details.question_details where survey_id='${surveyId}'`);
    console.log("result", result);
    if (result.length !== 0) {
      return res.send({ resultCode: 200, resultMessage: "Question details", responseData: result });

    }
    return res.send({ resultCode: 201, resultMessage: "InValid Survey" });

  } catch (error) {
    throw error;
  }
};

module.exports = {
  createQuestion,
  questionListBySurveyId
};

