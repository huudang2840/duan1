'use strict';

const express = require('express');
const app = express();

const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes');
const db = require('./config/db');

const methodOverride = require('method-override');

const SortMiddleware = require('./app/middlewares/SortMiddleware')

// Connect db
db.connect();

// POST
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// Override phương thức
app.use(methodOverride('_method'));

// Sử dụng middleware Sort
app.use(SortMiddleware);

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
            sortable: (field, sort) => {
                const sortType = field === sort.column ? sort.type : 'default';

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };
                const types = {
                    default: 'desc',
                    asc: 'desc',
                    desc: 'asc',
                };

                const icon = icons[sortType];
                const type = types[sortType];

                return `
                <a href="?_sort&column=${field}&type=${type}">
                    <span class="${icon}"></span>
                </a>
              `;
            },
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route app
route(app);

var port_number = server.listen(process.env.PORT || 3000);
app.listen(port_number);

