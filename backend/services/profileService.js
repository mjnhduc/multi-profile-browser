const Profile = require('../models/profileModel');

const createProfile = async (name, enabled, extensionPath, proxy, services) => {
  return await Profile.create({ name, enabled, extensionPath, proxy, services });
};

const getProfile = async (id) => {
  return await Profile.findByPk(id);
};

const updateProfile = async (id, name, enabled, extensionPath, proxy, services) => {
  const profile = await Profile.findByPk(id);
  if (profile) {
    profile.name = name;
    profile.enabled = enabled;
    profile.extensionPath = extensionPath;
    profile.proxy = proxy;
    profile.services = services;
    return await profile.save();
  }
  return null;
};

const deleteProfile = async (id) => {
  const profile = await Profile.findByPk(id);
  if (profile) {
    await profile.destroy();
    return profile;
  }
  return null;
};

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
};
