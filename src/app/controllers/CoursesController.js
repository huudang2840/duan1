const Course = require('../models/Course');

class CoursesController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.lug }).lean()
            .then(course => {
                res.render('courses/show');
            })
            .catch(next);
    }
}

module.exports = new CoursesController();