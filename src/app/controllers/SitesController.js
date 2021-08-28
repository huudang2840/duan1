const Course = require('../models/Course');
class SitesController {
    index(req, res, next) {
        // res.render('home');
        // cach 1: Callback
        //     Course.find({}, function(err, courses) {
        //         if (!err) {
        //             res.json(courses);
        //         } else {
        //             res.status(400).json({ error: "Error!!!" });
        //         }
        //     });

        // Cach 2:Promise

        Course.find({}).lean()
            .then(courses => res.render('home', {
                courses
            }))
            .catch(next);
    }




    search(req, res) {
        res.render('search');
    }
}

module.exports = new SitesController();