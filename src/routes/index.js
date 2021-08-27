const sitesController = require('./sites');
const newsRouter = require('./news');
const coursesController = require('./courses');

function route(app) {
    app.use('/news', newsRouter);

    app.use('/', sitesController);

    app.use('/search', sitesController);

    app.use('/courses', coursesController);

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search');
    // })
}

module.exports = route;