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
exports.createSurvey = async (req, res) => {
  const { surveyName, surveyIntroParagraph, surveyDescription, surveyStartDate, surveyEndDate, userId } = req.body;

  try {
    const todayDate = new Date();
    const month = todayDate.getMonth()
    const year = todayDate.getFullYear();
    const min = todayDate.getMinutes()
    const hours = todayDate.getHours()
    const seconds = todayDate.getSeconds()
    const day = todayDate.getDay()
    const finalDate = year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds;

    const checkEmailExistance = await query(`SELECT * from survey_details.users where id='${userId}'`);

    if (checkEmailExistance.length == 0) {
      return res.send({ resultCode: 201, resultMessage: `Invalid user id` });
    }

    const insertRecord = await query(`INSERT into survey_details.surveys
    (survey_name,survey_introparagraph,survey_description,survey_startdate,survey_enddate,userId,createdAt)values
    ('${surveyName}','${surveyIntroParagraph}','${surveyDescription}','${surveyStartDate}','${surveyEndDate}',${userId},'${finalDate}') `);

    if (insertRecord.affectedRows === 1) {
      return res.send({ resultCode: 200, resultMessage: "Added survey", responseData: { surveyId: insertRecord.insertId } });
    }
    return res.send({ resultCode: 201, resultMessage: "Something went wrong" });

  } catch (error) {
    throw error;
  }


};

exports.surveyList = async (req, res) => {
  try {
    const result = await query(`SELECT * from survey_details.surveys`);
    if (result.length !== 0) {
      return res.send({ resultCode: 200, resultMessage: "Survey details", responseData: result });

    }
    return res.send({ resultCode: 201, resultMessage: "InValid user" });

  } catch (error) {
    throw error;
  }
};

exports.surveyDetailsBySurveyId = async (req, res) => {
  const { surveyId } = req.body;

  try {
    let result = {};
    const checkSurvey = await query(`SELECT * from survey_details.surveys where id=${surveyId}`);

    if (checkSurvey.length == 0) {
      return res.send({ resultCode: 200, resultMessage: "Survey Details not found" });
    }
    const surveyQuestions = await query(`SELECT * from survey_details.surveyquestions where surveyId=${surveyId}`);

    return res.send({ resultCode: 200, resultMessage: "Survey Details", SurveyDetails: checkSurvey, QuestionDetails: surveyQuestions });

  } catch (error) {
    throw error;
  }
};

exports.deleteSurveyById = async (req, res) => {
  const { surveyId } = req.body;

  try {
    console.log("surveyId", surveyId);
    let result = {};

    await query(`delete from survey_details.surveyquestions where surveyId in (${surveyId})`);

    const deleteSurvey = await query(`delete from survey_details.surveys where id in (${surveyId})`);

    if (deleteSurvey.affectedRows !== 0) {
      return res.send({ resultCode: 200, resultMessage: "Survey Deleted" });
    }
    return res.send({ resultCode: 201, resultMessage: "Survey not found" });

  } catch (error) {
    throw error;
  }
};


