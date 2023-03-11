const newsRouter = require('./news');
const sideRouter = require('./side');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/', sideRouter);
}

module.exports = route;
