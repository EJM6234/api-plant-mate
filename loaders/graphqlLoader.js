const { ApolloServer } = require(`apollo-server-express`);
const { typeDefs }  = require('../schema/typeDefs');
const { resolvers }  = require('../schema/resolvers');

module.exports = async (app) => {
    try {
        console.log('Loading GraphQL...');
        const server = new ApolloServer({ typeDefs, resolvers });
        server.applyMiddleware({ app });
    } catch(err) {
        console.error('Error loading GraphQL', err);
        throw err;
    }

    return app;
};