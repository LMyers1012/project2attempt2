module.exports = (mongoose) => {
  const Instructor = mongoose.model(
    'instructors',
    mongoose.Schema({
      firstName: {
        type: String
      },
      lastName: {
        type: String
      },
      birthday: {
        type: String
      },
      beltLevel: {
        type: String
      },
      style: {
        type: String
      },
      strengths: {
        type: String
      },
      classes: {
        type: String
      }
    })
  );

  return Instructor;
};
