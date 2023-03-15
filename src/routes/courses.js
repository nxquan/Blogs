const express = require('express');
const courseController = require('../app/controllers/CourseController');

const router = express.Router();

router.get('/', courseController.index);
router.get('/create', courseController.createCourse);
router.get('/:slug', courseController.showDetail);
router.get('/edit/:id', courseController.editCourse);

router.post('/store', courseController.storeCourse);
router.put('/:id', courseController.updateCourses);
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
