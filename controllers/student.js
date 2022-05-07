const { ObjectId } = require('mongodb');
const db = require('../models');
const Student = db.student;

const getAllStudents = async (req, res, next) => {
  // #swagger.tags = ['Student']
  try {
    Student.find({})
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving students.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};

const getStudent = (req, res) => {
  // #swagger.tags = ['Student']
  const studentId = ObjectId(req.params.studentid);
  Student.find({ _id: studentId })
    .then((data) => {
      if (!data) res.status(404).send({ message: 'Not found student with id: ' + studentId });
      else res.send(data[0]);
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving theme with id=' + studentId,
        error: err
      });
    });
};

module.exports = { getAllStudents, getStudent };
