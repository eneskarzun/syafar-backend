require('dotenv').config();
const createServer = require('./infrastructures/http/createServer');
const container = require('./infrastructures/container');

const start = async () => {
  const server = await createServer(container);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

start();