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
        return await db.WaterSensor.findOne({
            where: {
                id
            }
        });
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

// const updateWaterSensors = async (body) => {
//   try {
//     return await db.WaterSensor.update(body);
//   } catch(err) {
//     throw err;
//   }
// };

const updateWaterSensor = async (id, body) => {
    try {
        return await db.WaterSensor.update(body, {
            where: {
                id,
            }
        });
    } catch(err) {
        throw err;
    }
};

const deleteWaterSensor = async (id) => {
    try {
        await db.WaterSensor.destroy({
            where: {
                id,
            }
        });
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