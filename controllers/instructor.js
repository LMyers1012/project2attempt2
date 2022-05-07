const { ObjectId } = require('mongodb');
const db = require('../models');
const Instructor = db.instructor;

const getAllInstructors = async (req, res, next) => {
  // #swagger.tags = ['Instructor']
  try {
    Instructor.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving instructors.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getInstructorById = (req, res) => {
  // #swagger.tags = ['Instructor']
  const instructorId = ObjectId(req.params.id);
  Instructor.find({ _id: instructorId })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found instructor with id: ' + instructorId });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with id=' + instructorId,
        error: err
      });
    });
};

module.exports = { getAllInstructors, getInstructorById };
