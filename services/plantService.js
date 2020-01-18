const { plantRepository } = require("../repositories");

const getAllPlants = async () => {
  try {
    return await plantRepository.getAllPlants();
  } catch(err) {
    throw err;
  }
};

const getPlantById = async (id) => {
  try {
    return await plantRepository.getPlantById(id);
  } catch(err) {
    throw err;
  }
};

const createPlant = async (name, isWatered, autoWatering) => {
  try {
    return await plantRepository.createPlant(name, isWatered, autoWatering);
  } catch(err) {
    throw err;
  }
};

const updatePlant = async (id, name, isWatered, autoWatering) => {
  try {
    return await plantRepository.updatePlant(id, name, isWatered, autoWatering);
  } catch(err) {
    throw err;
  }
};

const deletePlant = async (id) => {
  try {
    await plantRepository.deletePlant(id);
    return id;
  } catch(err) {
    throw err;
  }
};

module.exports = {
  getAllPlants,
  getPlantById,
  createPlant,
  updatePlant,
  deletePlant,
};