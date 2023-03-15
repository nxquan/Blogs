const Course = require('../model/Course');
const { convertMultiObject } = require('../../utils/converterMongoToObject');

class MeController {
    // [GET] /me/stored/courses
    storeCourses(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('me/store-courses', {
                    courses: convertMultiObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new MeController();
