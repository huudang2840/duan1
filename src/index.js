'use strict';

const express = require('express');
const app = express();
const port = 3000;

const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes');

const db = require('./config/db');

// Connect db
db.connect();

// POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//static
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

//Handlebars (Template engine)
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route app
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});