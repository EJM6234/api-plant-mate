const { waterSensorService } = require('../services');

const getAllWaterSensors = async (req, res) => {
    try {
        const waterSensors = await waterSensorService.getAllWaterSensors();
        return res.status(200).json(waterSensors);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const getWaterSensorById = async (req, res) => {
    try {
        const waterSensor = await waterSensorService.getWaterSensorById(req.params.id);
        return res.status(200).json(waterSensor);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const createWaterSensor = async (req, res) => {
    try {
        const waterSensor = await waterSensorService.createWaterSensor(req.body.number, req.body.plantId);
        return res.status(201).json(waterSensor);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

// const updateWaterSensors = async (req, res) => {
//   try {
//     await waterSensorService.updateWaterSensors(req.body);
//     return res.sendStatus(200);
//   } catch(err) {
//     res.status(500).send(err.message);
//   }
// };

const updateWaterSensor = async (req, res) => {
    try {
        await waterSensorService.updateWaterSensors(req.body);
        return res.sendStatus(200);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

const deleteWaterSensor = async (req, res) => {
    try {
        await waterSensorService.deleteWaterSensor(req.params.id);
        return res.sendStatus(204);
    } catch(err) {
        res.status(500).send(err.message);
    }
};

module.exports = {
    getAllWaterSensors,
    getWaterSensorById,
    createWaterSensor,
    // updateWaterSensors,
    updateWaterSensor,
    deleteWaterSensor,
};
 