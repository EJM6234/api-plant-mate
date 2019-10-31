const expressLoader = require('./expressLoader');
const sequelizeLoader = require('./sequelizeLoader');
const graphqlLoader = require('./graphqlLoader');

module.exports = async (options) => {
  const app = await expressLoader(options.expressApp);
  await sequelizeLoader();
  const applyGraphQl = await graphqlLoader(app);
  return applyGraphQl;
};