const Course = require('../model/Course');
const {
    convertMultiObject,
    convertOneObject,
} = require('../../utils/converterMongoToObject');

class CourseController {
    // [GET] /courses
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('courses', {
                    courses: convertMultiObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /courses/:slug
    showDetail(req, res, next) {
        const slug = req.params.slug;
        Course.findOne({ slug })
            .then((course) =>
                res.render('courses/showDetail', convertOneObject(course)),
            )
            .catch(next);
    }

    // [GET] /courses/create
    createCourse(req, res, next) {
        res.render('courses/create');
    }

    // [POST] /courses/store
    storeCourse(req, res, next) {
        const course = req.body;
        course.image = `https://img.youtube.com/vi/${course.videoId}/sddefault.jpg`;
        Course.create(course)
            .then((result) => {
                res.redirect(`/courses/${result.slug}`);
            })
            .catch(next);
    }
    // [GET] /courses/edit/:_id
    editCourse(req, res, next) {
        Course.findById({ _id: req.params.id })
            .then((course) => {
                res.render('courses/edit', convertOneObject(course));
            })
            .catch(next);
    }

    // [PUT] /courses/:_id
    updateCourses(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then((course) => {
                res.redirect('/me/stored/courses');
            })
            .catch(next);
    }

    // [DELETE] /courses/:_id
    deleteCourse(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then((count) => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
