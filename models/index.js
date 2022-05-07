const dbConfig = require('../db/config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.student = require('./student.js')(mongoose);
db.user = require('./user.js')(mongoose);
db.instructor = require('./instructor.js')(mongoose);

module.exports = db;
