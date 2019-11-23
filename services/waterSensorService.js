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

const getWaterSensorByPlantId = async (plantId) => {
    try {
        return await waterSensorRepository.getWaterSensorByPlantId(plantId);
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

const updateWaterSensor = async (id, plantId) => {
    try {
        const previousSensor = await waterSensorRepository.getWaterSensorByPlantId(plantId);
        if (previousSensor) await waterSensorRepository.updateWaterSensor(previousSensor.id, null);
        return await waterSensorRepository.updateWaterSensor(id, plantId);
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
    getWaterSensorByPlantId,
    createWaterSensor,
    updateWaterSensor,
    deleteWaterSensor,
};