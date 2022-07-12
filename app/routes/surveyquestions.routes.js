const Router = require('express-promise-router');

const controller = require('../controllers/surveyquestions.controller');

module.exports = () => {
    console.log("que routes");
    const router = Router({ mergeParams: true });
    
    router.route('/createQuestion').post(controller.createQuestion);
    router.route('/questionListBySurveyId').post(controller.questionListBySurveyId);

    // router.route('/login').post(controller.login);

    return router;
};