const routes = (handler) => [
  {
    method: 'GET',
    path: '/api/hotels',
    handler: handler.getHotelsHandler,
  },
];

module.exports = routes;