// controllers/profileController.js

const profileService = require('../services/profileService');

const createProfile = async (req, res, next) => {
  const { name, enabled, extensionPath, proxy, services } = req.body;
  const profile = await profileService.createProfile(name, enabled, extensionPath, proxy, services);
  res.status(201).json(profile);
};

const getProfile = async (req, res, next) => {
  const { id } = req.params;
  const profile = await profileService.getProfile(parseInt(id, 10));
  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
};

const updateProfile = async (req, res, next) => {
  const { id } = req.params;
  const { name, enabled, extensionPath, proxy, services } = req.body;
  const profile = await profileService.updateProfile(parseInt(id, 10), name, enabled, extensionPath, proxy, services);
  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
};

const deleteProfile = async (req, res, next) => {
  const { id } = req.params;
  const profile = await profileService.deleteProfile(parseInt(id, 10));
  if (profile) {
    res.status(200).json(profile);
  } else {
    res.status(404).send('Profile not found');
  }
};

module.exports = {
  createProfile,
  getProfile,
  updateProfile,
  deleteProfile
};
