const { EmployeeProfile } = require("../models");

const showProfile = async (where) => {
  const profile = await EmployeeProfile.findOne({
    where: where,
  });
  return profile;
};

const updateProfile = async (profile, data) => {
  await profile.update(data);
  return profile;
};

const createProfile = async (data) => {
  const profile = await EmployeeProfile.create(data);
  return profile;
};

const deleteProfile = async (profile) => {
  await profile.destroy();
  return profile;
};

module.exports = {
  showProfile,
  updateProfile,
  createProfile,
  deleteProfile,
};
