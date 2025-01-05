const { Education } = require("../models");

const getEducationEmployee = async (where) => {
  const educationData = await Education.findAll({
    where: where,
  });
  return educationData;
};
const createEducation = async (data) => {
  const education = await Education.create(data);
  return education;
};

const updateEducation = async (education, data) => {
  await education.update(data);
  return education;
};

const deleteEducation = async (education) => {
  await education.destroy();
  return education;
};

module.exports = {
  getEducationEmployee,
  createEducation,
  updateEducation,
  deleteEducation,
};
