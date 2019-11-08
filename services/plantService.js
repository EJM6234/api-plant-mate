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

const createPlant = async (name, waterSensorId) => {
  try {
    return await plantRepository.createPlant(name, waterSensorId);
  } catch(err) {
    throw err;
  }
};

// const updatePlants = async (body) => {
//   try {
//     return await plantRepository.updatePlants(body);
//   } catch(err) {
//     throw err;
//   }
// };

const updatePlant = async (id, body) => {
  try {
    return await plantRepository.updatePlant(id, body);
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
  // updatePlants,
  updatePlant,
  deletePlant,
};