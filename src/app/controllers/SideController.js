const Course = require('../model/Course');

class SideController {
    // [GET] /
    async index(req, res) {
        Course.find({})
            .then((courses) => {
                res.json(courses);
            })
            .catch((err) => {
                res.status(400).json({ error: 'Error messsage' });
            });
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
