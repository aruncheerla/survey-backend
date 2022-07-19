const db = require("../models");
const Surveyparticipantanswers = db.surveyparticipantanswers;
const Op = db.Sequelize.Op;
var mysql = require('mysql');
const util = require('util');
// Create and Save a new Track
var con = mysql.createConnection({
  host: "survey-db.cekydkanjmcc.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "surveyadmin",
  database: "survey_details"
});

const query = util.promisify(con.query).bind(con);

exports.createSurveyParticipantAns = async (req, res) => {
  const { surveyParticipantanswerText, surveyQuestionanswersId,surveyquestionsId } = req.body;

  try {
    const todayDate = new Date();
    const newDate=new Date(todayDate);
    const month =todayDate.getMonth()
    const year=todayDate.getFullYear();
    const min=todayDate.getMinutes()
    const  hours=todayDate.getHours()
    const  seconds=todayDate.getSeconds()
    const day=todayDate.getDay()
    const finalDate =year+'-'+month+'-'+day+' '+hours+':'+min+':'+seconds

    const insertRecord = await query(`INSERT into survey_details.surveyparticipantanswers
    (surveyparticipantanswer_text,surveyquestionanswersId,surveyquestionsId,createdAt
    )values('${surveyParticipantanswerText}','${surveyQuestionanswersId}','${surveyquestionsId}','${finalDate}')`);

    if (insertRecord.affectedRows === 1) {
      return res.send({ resultCode: 200, resultMessage: "Response recored" });
    }
    return res.send({ resultCode: 201, resultMessage: "Something went wrong" });

  } catch (error) {
    throw error;
  }
}