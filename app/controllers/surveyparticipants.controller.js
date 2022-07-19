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
exports.createSurveyParticipant = async (req, res) => {

  const { surveyId, surveyParticipantsEmail, surveyParticipantsFirstname, surveyParticipantsLastname, surveyParticipantsDemographics } = req.body;

  try {
    const todayDate = new Date();
    const newDate = new Date(todayDate);
    const month = todayDate.getMonth()
    const year = todayDate.getFullYear();
    const min = todayDate.getMinutes()
    const hours = todayDate.getHours()
    const seconds = todayDate.getSeconds()
    const day = todayDate.getDay()
    const finalDate = year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds

    const insertRecord = await query(`INSERT into survey_details.surveyparticipants
    (surveyparticipants_email,surveyparticipants_firstname,surveyparticipants_lastname,
      surveyparticipants_demographics,surveyId,createdAt
    )values('${surveyParticipantsEmail}','${surveyParticipantsFirstname}','${surveyParticipantsLastname}','${surveyParticipantsDemographics}','${surveyId}','${finalDate}')`);

    if (insertRecord.affectedRows === 1) {
      return res.send({ resultCode: 200, resultMessage: "Added participant" });
    }
    return res.send({ resultCode: 201, resultMessage: "Something went wrong" });

  } catch (error) {
    throw error;
  }


};

exports.bulkCreateSurveyParticipant = async (req, res) => {

  const { surveyId, surveyParticipantsEmail } = req.body;

  try {
    const todayDate = new Date();
    const newDate = new Date(todayDate);
    const month = todayDate.getMonth()
    const year = todayDate.getFullYear();
    const min = todayDate.getMinutes()
    const hours = todayDate.getHours()
    const seconds = todayDate.getSeconds()
    const day = todayDate.getDay()
    const finalDate = year + '-' + month + '-' + day + ' ' + hours + ':' + min + ':' + seconds

    surveyParticipantsEmail.map(async item => {
      try {
        await query(`INSERT into survey_details.surveyparticipants
    (surveyparticipants_email,surveyId,createdAt)values
    ('${item}',${surveyId},'${finalDate}')`);
      } catch (error) {
        return res.send(error);
      }
    });

    return res.send({ resultCode: 200, resultMessage: "Added survey Participants" });

  } catch (error) {
    throw error;
  }

};

