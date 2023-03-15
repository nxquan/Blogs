const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');

// app.use(morgan('combined'))

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

//template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(methodOverride('_method'));

//define route
route(app);

//Connect to db
db.connect();

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
