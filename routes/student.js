const express = require('express');
const router = express.Router();

const studentController = require('../controllers/student');

router.get('/:studentid', studentController.getStudent);

module.exports = router;
