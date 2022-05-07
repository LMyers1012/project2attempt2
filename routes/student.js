const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student');

router.get('/', studentController.getAllStudents);
router.get('/:studentid', studentController.getStudent);
router.post('/', studentController.createNewStudent);
router.put('/:studentid', studentController.updateStudentById);

module.exports = router;
