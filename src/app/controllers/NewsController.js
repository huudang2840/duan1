class NewsController {

    // [GET] /news
    index(req, res) {
            res.render('news');
        }
        // [GET]/news/:test
    show(res, req) {
        req.send('Hi');
    }
}

module.exports = new NewsController;