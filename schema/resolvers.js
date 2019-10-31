const {
    getAllPlants,
    getPlantById,
    createPlant,
    deletePlant,
} = require('../services/plantService');

const {
    getAllWaterSensors,
    getWaterSensorById,
    createWaterSensor,
    deleteWaterSensor
} = require('../services/waterSensorService');

module.exports.resolvers = {
    Query: {
        plants: () => getAllPlants(),
        plant: (_, { id }) => getPlantById(id),
        waterSensors: async () => {
            const waterSensors = await getAllWaterSensors();
            return waterSensors.sort((a, b) => a.number - b.number);
        },
        waterSensor: (_, { id }) => getWaterSensorById(id)
    },
    Mutation: {
        createPlant: (_, { name, waterSensorId }) => createPlant(name, waterSensorId),
        deletePlant: (_, { id }) => deletePlant(id),
        createWaterSensor: (_, { number, plantId }) => createWaterSensor(number, plantId),
        deleteWaterSensor: (_, { id }) => deleteWaterSensor(id),
    },
};