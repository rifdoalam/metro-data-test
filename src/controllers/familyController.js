const familyService = require("../services/familyService.js");

const showFamily = async (req, res) => {
  const { id } = req.params;
  try {
    const family = await familyService.showFamily(id);
    if (family == null) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({
      message: "success",
      data: family,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createFamily = async (req, res) => {
  try {
    const { employee_id, name, relationship, created_by } = req.body;
    const family = await familyService.createFamily({ employee_id, name, relationship, created_by });
    res.status(200).json({
      message: "success",
      data: family,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateFamily = async (req, res) => {
  const { id } = req.params;
  const { name, relationship, updated_by } = req.body;
  try {
    const familyFind = await familyService.showFamily(id);
    if (familyFind == null) {
      return res.status(404).json({ message: "data not found" });
    }
    const family = await familyService.updateFamily(familyFind, {
      name,
      relationship,
      updated_by,
    });
    res.status(200).json({
      message: "success",
      data: family,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFamily = async (req, res) => {
  const { id } = req.params;
  try {
    const family = await familyService.showFamily(id);
    if (family == null) {
      return res.status(404).json({ message: "data not found" });
    }
    await familyService.deleteFamily(family);
    res.status(200).json({
      message: "success",
      data: family,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createFamily,
  updateFamily,
  deleteFamily,
  showFamily,
};
