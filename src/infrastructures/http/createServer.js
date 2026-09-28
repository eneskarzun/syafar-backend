const Hapi = require('@hapi/hapi');
const hotels = require('../../interfaces/hotels');

const createServer = async (container) => {
  const server = Hapi.server({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    routes: {
      cors: {
        origin: ['*'], // Izinkan akses dari frontend Flutter nantinya
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