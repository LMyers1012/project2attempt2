const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructor');

router.get('/', instructorController.getAllInstructors);
router.get('/:id', instructorController.getInstructorById);
// router.post('/', instructorController.createNewInstructor);
// router.put('/:id', instructorController.updateInstructorById);
// router.delete('/:id', instructorController.deleteInstructorById);

module.exports = router;
