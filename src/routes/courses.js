const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.destroy);
router.post('/handle-form-actions', coursesController.handleFormActions);
router.post('/handle-trash-form-actions', coursesController.handleTrashFormActions);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id/force', coursesController.forceDestore);
router.get('/:slug', coursesController.show);

module.exports = router;