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
const create = async (req, res) => {
  const { email, password, fullName, dataOfBirth, createdBy } = req.body;

  try {
    const todayDate = new Date();

    const insertRecord = await query(`INSERT into survey_details.user_details
    (email,password,full_name,date_of_birth,created_by,created_at)values
    ('${email}','${password}','${fullName}','${dataOfBirth}','${createdBy}','${todayDate}')`);

    if (insertRecord.affectedRows === 1) {
      return res.send("Sign up successful");
    }
    return res.send("something went wrong");

  } catch (error) {
    throw error;
  }


};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await query(`SELECT * from survey_details.user_details where email='${email}' and password='${password}'`);
    console.log("result",result);
    if (result.length !==0) {
      return res.send({ resultCode: 200,resultMessage:"User details", responseData: result[0] });

    }
    return res.send({ resultCode: 201,resultMessage:"InValid user"});

  } catch (error) {
    console.log("error", error);
    throw error;
  }
}


module.exports = {
  create,
  login
};

