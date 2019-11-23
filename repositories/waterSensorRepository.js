const db = require('../config/sequelize');

const getAllWaterSensors = async () => {
    try {
        return await db.WaterSensor.findAll();
    } catch(err) {
        throw err;
    }
};

const getWaterSensorById = async (id) => {
    try {
        return await db.WaterSensor.findOne({ where: { id }});
    } catch(err) {
        throw err;
    }
};

const getWaterSensorByPlantId = async (plantId) => {
    try {
        return await db.WaterSensor.findOne({ where: { plantId }});
    } catch(err) {
        throw err;
    }
};

const createWaterSensor = async (number, plantId) => {
    try {
        return await db.WaterSensor.create({
            number,
            plantId
        });
    } catch(err) {
        throw err;
    }
};

const updateWaterSensor = async (id, plantId) => {
    try {
        const result = await db.WaterSensor.update({
            plantId
        }, {
            where: { id },
            returning: true,
        });
        return result[1][0].dataValues;
    } catch(err) {
        throw err;
    }
};

const deleteWaterSensor = async (id) => {
    try {
        await db.WaterSensor.destroy({ where: { id }});
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