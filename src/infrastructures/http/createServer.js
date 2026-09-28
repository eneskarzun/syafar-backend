const Hapi = require('@hapi/hapi');
const hotels = require('../../interfaces/hotels');

const createServer = async (container) => {
  const server = Hapi.server({
    host: '0.0.0.0',
    port: 3000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Registrasi plugin routes
  await server.register([
    {
      plugin: hotels,
      options: { container },
    },
  ]);

  return server;
};

module.exports = createServer;