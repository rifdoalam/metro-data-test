const { Education } = require("../models");

const showEducation = async (id) => {
  const educationData = await Education.findByPk(id);
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
  showEducation,
  createEducation,
  updateEducation,
  deleteEducation,
};
