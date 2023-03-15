const express = require('express');
const meController = require('../app/controllers/MeController');

const router = express.Router();

router.get('/stored/courses', meController.storeCourses);

module.exports = router;
