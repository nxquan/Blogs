const newsRouter = require('./news');
const sideRouter = require('./side');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
    app.use('/', sideRouter);
}

module.exports = route;
