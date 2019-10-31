const { plantService } = require('../services');

const getAllPlants = async (req, res) => {
  try {
    const plants = await plantService.getAllPlants();
    return res.status(200).json(plants);
  } catch(err) {
    res.status(500).send(err.message);
  }
};

const getPlantById = async (req, res) => {
  try {
    const plant = await plantService.getPlantById(req.params.id);
    return res.status(200).json(plant);
  } catch(err) {
    res.status(500).send(err.message);
  }
};

const createPlant = async (req, res) => {
  try {
    const plant = await plantService.createPlant(req.body.name, req.body.waterSensorId);
    return res.status(201).json(plant);
  } catch(err) {
    res.status(500).send(err.message);
  }
};

// const updatePlants = async (req, res) => {
//   try {
//     await plantService.updatePlants(req.body);
//     return res.sendStatus(200);
//   } catch(err) {
//     res.status(500).send(err.message);
//   }
// };

const updatePlant = async (req, res) => {
  try {
    await plantService.updatePlants(req.body);
    return res.sendStatus(200);
  } catch(err) {
    res.status(500).send(err.message);
  }
};

const deletePlant = async (req, res) => {
  try {
    await plantService.deletePlant(req.params.id);
    return res.sendStatus(204);
  } catch(err) {
    res.status(500).send(err.message);
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
