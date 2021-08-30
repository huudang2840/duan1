const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');
class CoursesController {
    // [GET] courses/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next);
    }

    // [GET] courses/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST] courses/store
    store(req, res, next) {
        // res.json(req.body)
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((err) => {

            })

    }

    // [GET] courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id).lean()
            .then(course => res.render('courses/edit', {
                course
            }))
            .catch(next);
    }

    // [PUT] courses/:id
    update(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${formData.videoId}/sddefault.jpg`
        Course.updateOne({ _id: req.params.id }, formData)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next)
    }

    // [DELETE] courses/:id 
    // Xóa tạm thời
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [PATCH] courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    // [DELETE] courses/:id/force 
    // Xóa vĩnh viễn
    forceDestore(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }

    handleFormActions(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } })
                    .then(() => res.redirect('back'))
                    .catch(next)
                break;
            default:
                res.json({ message: 'Action is invalid' })
        }
    }

}


module.exports = new CoursesController();