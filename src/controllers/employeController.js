const employeService = require("../services/employeService.js");
const createEmployee = async (req, res) => {
  try {
    const { nik, name, is_active, start_date, end_date, created_by } = req.body;
    const employee = await employeService.createEmployee({
      nik,
      name,
      is_active,
      start_date,
      end_date,
      created_by,
    });
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { nik, name, is_active, start_date, end_date, updated_by } = req.body;
  try {
    const employeeFind = await employeService.getDetailEmployee(id);
    if (employeeFind == null) {
      return res.status(404).json({ message: "data not found" });
    }
    const employee = await employeService.updateEmployee(employeeFind, {
      nik,
      name,
      is_active,
      start_date,
      end_date,
      updated_by,
    });
    res.status(200).json({
      message: "success",
      data: employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employee = await employeService.getDetailEmployee(id);
    if (employee == null) {
      return res.status(404).json({ message: "data not found" });
    }
    await employeService.deleteEmployee(employee);
    res.status(200).json({
      message: "success",
      data: employee,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllDataEmployee = async (req, res) => {
  try {
    const employeeData = await employeService.getAllDataEmployee();
    res.status(200).json({
      message: "success",
      data: employeeData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getDetailEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const employeeData = await employeService.getDetailEmployee(id);
    if (employeeData == null) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({
      message: "success",
      data: employeeData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const reportEmployee = async (req, res) => {
  try {
    const employeeData = await employeService.reportEmployee();
    const formattedData = employeeData.map((employee) => {
      const profile = employee.profile;
      const age = profile?.date_of_birth ? `${new Date().getFullYear() - new Date(profile.date_of_birth).getFullYear()} Years Old` : null;

      const familyData = employee.family.reduce(
        (acc, family) => {
          if (family.relation_status === "Istri") acc.wives += 1;
          if (family.relation_status === "Anak") acc.children += 1;
          return acc;
        },
        { wives: 0, children: 0 }
      );
      const familyInfo = familyData.wives === 0 && familyData.children === 0 ? "-" : `${familyData.wives} Istri & ${familyData.children} Anak`;

      return {
        employee_id: employee.id,
        nik: employee.nik,
        name: employee.name,
        is_active: employee.is_active,
        gender: profile?.gender || null,
        age,
        school_name: employee.education[0]?.name || null,
        level: employee.education[0]?.level || null,
        family_data: familyInfo,
      };
    });
    res.status(200).json({
      message: "success",
      data: formattedData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEmployee, getAllDataEmployee, getDetailEmployee, deleteEmployee, updateEmployee, reportEmployee };
