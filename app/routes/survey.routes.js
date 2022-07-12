


const Router = require('express-promise-router');

const controller = require('../controllers/survey.controller');

module.exports = () => {
    console.log("user routes");
    const router = Router({ mergeParams: true }); 
    
    router.route('/createSurvey').post(controller.createSurvey);
    router.route('/surveyList').post(controller.surveyList);

    return router;
};