const Course = require('../models/Course');
const { mongooseToObject, multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] me/stored/courses
    storedCourses(req, res, next) {



        let courseQuery = Course.find({});

        // Sort 
        if (req.query.hasOwnProperty('_sort')) {
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            });
        }

        // Promise
        Promise.all([courseQuery, Course.countDocumentsDeleted()])
            .then(([courses, deletedCount]) =>
                res.render('me/stored-courses', {
                    deletedCount,
                    courses: multipleMongooseToObject(courses),
                })
            )
            .catch(next);
    }

    // [GET] me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({}).lean()
            .then(courses => res.render('me/trash-courses', {
                courses
            }))
            .catch(next);
    }
}
//     Course.countDocumentsDeleted()
//         .then((deleteCount) => {
//             console.log(deleteCount);
//         })
//         .catch(() => {});


//     Course.find({}).lean()
//         .then(courses => res.render('me/stored-courses', {
//             courses
//         }))
//         .catch(next);

module.exports = new MeController();