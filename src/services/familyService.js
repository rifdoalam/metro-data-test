const { EmployeeFamily } = require("../models");

const showFamily = async (where) => {
  const family = await EmployeeFamily.findByPk(where);
  return family;
};
const createFamily = async (data) => {
  const family = await EmployeeFamily.create(data);
  return family;
};

const updateFamily = async (family, data) => {
  await family.update(data);
  return family;
};

const deleteFamily = async (family) => {
  await family.destroy();
  return family;
};

module.exports = {
  createFamily,
  updateFamily,
  deleteFamily,
  showFamily,
};
