const sitesController = require('./sites');
const newsRouter = require('./news');
const coursesController = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/courses', coursesController);

    app.use('/me', meRouter);

    app.use('/search', sitesController);

    app.use('/', sitesController);


    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search');
    // })
}

module.exports = route;