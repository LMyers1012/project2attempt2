const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/user', require('./user'));
router.use('/student', require('./student'));
router.use('/instructor', require('./instructor'));

module.exports = router;
