const config = require('./config');
const loaders = require('./loaders');
const express = require('express');

(async function main() {
  let app = express();
  const port = config.port || 3001;

  app = await loaders({ expressApp: app });

  app.listen(port, () => console.log(`Listening on PORT ${port}`));
})();
