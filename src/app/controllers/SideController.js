class SideController {

    // [GET] /
    index(req, res) {
        res.render('home')
    }

    // [GET] search page /search
    search(req, res) {
        res.render('search')
    }

    // [GET] search page /search
    show(req, res) {
        res.render('show')
    }
}

module.exports = new SideController()
