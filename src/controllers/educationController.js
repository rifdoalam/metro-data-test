const educationService = require("../services/educationService.js");

const createEducation = async (req, res) => {
  try {
    const { employee_id, name, level, description, created_by } = req.body;
    const education = await educationService.createEducation({ employee_id, name, level, description, created_by });
    res.status(200).json({
      message: "success",
      data: education,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const showEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const education = await educationService.showEducation(id);
    if (education == null) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({
      message: "success",
      data: education,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateEducation = async (req, res) => {
  const { id } = req.params;
  const { name, level, description, updated_by } = req.body;
  try {
    const educationFind = await educationService.showEducation(id);
    if (educationFind == null) {
      return res.status(404).json({ message: "data not found" });
    }
    const education = await educationService.updateEducation(educationFind, {
      employee_id,
      name,
      level,
      description,
      updated_by,
    });
    res.status(200).json({
      message: "success",
      data: education,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteEducation = async (req, res) => {
  const { id } = req.params;
  try {
    const education = await educationService.showEducation(id);
    if (education == null) {
      return res.status(404).json({ message: "data not found" });
    }
    await educationService.deleteEducation(education);
    res.status(200).json({
      message: "success",
      data: education,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createEducation,
  showEducation,
  updateEducation,
  deleteEducation,
};
