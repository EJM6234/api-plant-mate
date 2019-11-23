const { gql } = require('apollo-server-express');

module.exports.typeDefs = gql`
    type Plant {
        id: Int!,
        name: String!,
        isWatered: Boolean,
        autoWatering: Boolean,
        waterSensor: WaterSensor
    }
    
    type WaterSensor {
        id: Int!,
        number: Int!,
        plantId: Int
    }
    
    type Query {
        plants: [Plant],
        plant(id: Int!): Plant,
        waterSensors: [WaterSensor],
        waterSensor(id: Int!): WaterSensor
    }

    type Mutation {
        createPlant(name: String! waterSensorId: Int): Plant!,
        updatePlant(id: Int!, name: String, isWatered: Boolean, autoWatering: Boolean): Plant!,
        deletePlant(id: Int!): Int!,
        createWaterSensor(number: Int!, plantId: Int): WaterSensor!,
        updateWaterSensor(id: Int!, plantId: Int): WaterSensor!,
        deleteWaterSensor(id: Int!): WaterSensor!
    }
`;

