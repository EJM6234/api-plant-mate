const { gql } = require('apollo-server-express');

module.exports.typeDefs = gql`
    type Plant {
        id: Int!,
        name: String!,
        waterSensorId: Int,
        isWatered: Boolean
        autoWatering: Boolean
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
        deletePlant(id: Int!): Int!,
        createWaterSensor(number: Int!, plantId: Int): WaterSensor!,
        deleteWaterSensor(id: Int!): WaterSensor!
    }
`;

