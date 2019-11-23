const {
    getAllPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant,
} = require('../services/plantService');
const {
    getAllWaterSensors,
    getWaterSensorById,
    getWaterSensorByPlantId,
    createWaterSensor,
    updateWaterSensor,
    deleteWaterSensor
} = require('../services/waterSensorService');

module.exports.resolvers = {
    Query: {
        plants: () => getAllPlants(),
        plant: (parent, args) => getPlantById(args.id),
        waterSensors: async () => {
            const waterSensors = await getAllWaterSensors();
            return waterSensors.sort((a, b) => a.number - b.number);
        },
        waterSensor: (parent, args) => getWaterSensorById(args.id)
    },
    Plant: {
        waterSensor: (source) => getWaterSensorByPlantId(source.dataValues.id)
    },
    Mutation: {
        createPlant: (parent, args) => createPlant(args.name, args.waterSensorNumber),
        updatePlant: (parent, args) => updatePlant(args.id, args.name, args.isWatered, args.autoWatering),
        deletePlant: (parent, args) => deletePlant(args.id),
        createWaterSensor: (parent, args) => createWaterSensor(args.number, args.plantId),
        updateWaterSensor: (parent, args) => updateWaterSensor(args.id, args.plantId),
        deleteWaterSensor: (parent, args) => deleteWaterSensor(args.id),
    },
};