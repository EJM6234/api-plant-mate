const db = require('../config/sequelize');

const getAllPlants = async () => {
  try {
    return await db.Plant.findAll();
  } catch(err) {
    throw err;
  }
};

const getPlantById = async (id) => {
  try {
    return await db.Plant.findOne({
      where: {
        id
      }
    });
  } catch(err) {
    throw err;
  }
};

const createPlant = async (name, isWatered, autoWatering) => {
  try {
    return await db.Plant.create({
      name,
      isWatered,
      autoWatering
    });
  } catch(err) {
    throw err;
  }
};

const updatePlant = async (id, name, isWatered, autoWatering) => {
  try {
    const result = await db.Plant.update({
      name,
      isWatered,
      autoWatering
    }, {
      where: { id },
      returning: true
    });
    return result[1][0].dataValues;
  } catch(err) {
    throw err;
  }
};

const deletePlant = async (id) => {
  try {
    await db.Plant.destroy({
      where: {
        id,
      }
    });
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