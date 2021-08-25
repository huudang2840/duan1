const sitesController = require('./sites');
const newsRouter = require('./news');

function route(app) {

    app.use('/news', newsRouter);

    app.use('/', sitesController);

    app.use('/search', sitesController);

    // app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.render('search');
    // })
}

module.exports = route;