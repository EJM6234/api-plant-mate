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

// const updatePlants = async (body) => {
//   try {
//     return await db.Plant.update(body);
//   } catch(err) {
//     throw err;
//   }
// };

const updatePlant = async (id, body) => {
  try {
    const result = await db.Plant.update(body, {
      where: {
        id,
      }
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
  // updatePlants,
  updatePlant,
  deletePlant,
};