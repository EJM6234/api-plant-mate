const { waterSensorRepository } = require("../repositories");

const getAllWaterSensors = async () => {
    try {
        return await waterSensorRepository.getAllWaterSensors();
    } catch(err) {
        throw err;
    }
};

const getWaterSensorById = async (id) => {
    try {
        return await waterSensorRepository.getWaterSensorById(id);
    } catch(err) {
        throw err;
    }
};

const createWaterSensor = async (number, plantId) => {
    try {
        return await waterSensorRepository.createWaterSensor(number, plantId);
    } catch(err) {
        throw err;
    }
};

// const updateWaterSensors = async (body) => {
//   try {
//     return await waterSensorRepository.updateWaterSensors(body);
//   } catch(err) {
//     throw err;
//   }
// };

const updateWaterSensor = async (id, body) => {
    try {
        return await waterSensorRepository.updateWaterSensor(id, body);
    } catch(err) {
        throw err;
    }
};

const deleteWaterSensor = async (id) => {
    try {
        await waterSensorRepository.deleteWaterSensor(id);
    } catch(err) {
        throw err;
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