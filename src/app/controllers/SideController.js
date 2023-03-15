const Course = require('../model/Course');
const { convertMultiObject } = require('../../utils/converterMongoToObject');

class SideController {
    // [GET] /
    index(req, res, next) {
        res.render('home');
    }

    // [GET] search page /search
    search(req, res) {
        res.render('search');
    }

    // [GET] search page /search
    show(req, res) {
        res.send('show');
    }
}

module.exports = new SideController();
