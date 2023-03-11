const express = require('express');
const router = express.Router();
const sideController = require('../app/controllers/SideController')

router.get('/search', sideController.search)
router.get('/:slug', sideController.show)
router.get('/', sideController.index)

module.exports = router
