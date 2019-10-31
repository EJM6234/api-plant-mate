const { gql } = require('apollo-server-express');

module.exports.typeDefs = gql`
    type Plant {
        id: ID!,
        name: String!,
        waterSensorId: Int,
        isWatered: Boolean!
        autoWatering: Boolean!
    }
    
    type WaterSensor {
        id: ID!,
        number: Int!,
        plantId: Int
    }
    
    type Query {
        plants: [Plant],
        plant(id: ID!): Plant,
        waterSensors: [WaterSensor],
        waterSensor(id: ID!): WaterSensor
    }

    type Mutation {
        createPlant(name: String! waterSensorId: Int): Plant!,
        deletePlant(id: ID!): Plant!,
        createWaterSensor(number: Int!, plantId: Int): WaterSensor!,
        deleteWaterSensor(id: ID!): WaterSensor!
    }
`;

