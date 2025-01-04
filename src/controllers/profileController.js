const profileService = require("../services/profileService.js");
const employeeService = require("../services/employeService.js");

const showProfile = async (req, res) => {
  const { employee_id } = req.params;
  try {
    const profile = await profileService.showProfile({ employee_id });
    if (profile == null) {
      return res.status(404).json({ message: "data not found" });
    }
    res.status(200).json({
      message: "success",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProfile = async (req, res) => {
  const { employee_id } = req.params;
  const { place_of_birth, date_of_birth, gender, is_married, prof_pict, updated_by } = req.body;
  try {
    const profile = await profileService.showProfile({ employee_id });
    if (profile == null) {
      return res.status(404).json({ message: "data not found" });
    }

    await profileService.updateProfile(profile, { employee_id, place_of_birth, date_of_birth, gender, is_married, prof_pict, updated_by });
    res.status(200).json({
      message: "success",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProfile = async (req, res) => {
  const { employee_id, place_of_birth, date_of_birth, gender, is_married, prof_pict, created_by } = req.body;
  try {
    const employee = await employeeService.getDetailEmployee({ employee_id });
    if (employee == null) {
      return res.status(404).json({ message: "data not found" });
    }
    const profile = await profileService.createProfile({
      employee_id,
      place_of_birth,
      date_of_birth,
      gender,
      is_married,
      prof_pict,
      created_by,
    });
    res.status(200).json({
      message: "success",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProfile = async (req, res) => {
  const { employee_id } = req.params;
  try {
    const profile = await profileService.showProfile({ employee_id });
    if (profile == null) {
      return res.status(404).json({ message: "data not found" });
    }
    await profileService.deleteProfile(profile);
    res.status(200).json({
      message: "success",
      data: profile,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  showProfile,
  updateProfile,
  createProfile,
  deleteProfile,
};
