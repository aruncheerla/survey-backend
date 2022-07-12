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
const createSurvey = async (req, res) => {
  const { surveyName, surveyType, description, createdBy } = req.body;

  try {
    console.log("here");
    const todayDate = new Date();

    const insertRecord = await query(`INSERT into survey_details.survey_details
    (survey_name,survey_type,description,created_by,created_at)values
    ('${surveyName}','${surveyType}','${description}','${createdBy}','${todayDate}') `);

    console.log("insertRecord", insertRecord);

    if (insertRecord.affectedRows === 1) {
      return res.send({ resultCode: 200,resultMessage:"Added survey", surveyId: insertRecord.insertId });
    }
    return res.send({ resultCode: 201,resultMessage:"Something went wrong"});

  } catch (error) {
    throw error;
  }


};

const surveyList = async (req, res) => {
  const { surveyId } = req.body;

  try {
    console.log("here in create que");
    const result = await query(`SELECT * from survey_details.survey_details`);
    console.log("result", result);
    if (result.length !== 0) {
      return res.send({ resultCode: 200, resultMessage: "User details", responseData: result });

    }
    return res.send({ resultCode: 201, resultMessage: "Survey Not Found" });

  } catch (error) {
    throw error;
  }
};


module.exports = {
  createSurvey,
  surveyList
};

