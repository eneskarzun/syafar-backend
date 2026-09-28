const HotelsHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'hotels',
  register: async (server, { container }) => {
    const hotelsHandler = new HotelsHandler(container);
    server.route(routes(hotelsHandler));
  },
};