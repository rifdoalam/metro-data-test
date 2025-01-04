const { Employee, Education, EmployeeProfile, EmployeeFamily } = require("../models");

const getAllDataEmployee = async () => {
  const employeeData = await Employee.findAll({
    include: [
      {
        model: Education,
        as: "education",
      },
      {
        model: EmployeeProfile,
        as: "profile",
      },
      {
        model: EmployeeFamily,
        as: "family",
      },
    ],
  });
  return employeeData;
};

const getDetailEmployee = async (where) => {
  const employeeData = await Employee.findByPk(where, {
    include: [
      {
        model: Education,
        as: "education",
      },
      {
        model: EmployeeProfile,
        as: "profile",
      },
      {
        model: EmployeeFamily,
        as: "family",
      },
    ],
  });
  return employeeData;
};
const createEmployee = async (data) => {
  const employee = await Employee.create(data);
  return employee;
};

const updateEmployee = async (employee, data) => {
  await employee.update(data);
  return employee;
};

const deleteEmployee = async (employee) => {
  await employee.destroy();
  return employee;
};

module.exports = { getAllDataEmployee, getDetailEmployee, createEmployee, deleteEmployee, updateEmployee };
