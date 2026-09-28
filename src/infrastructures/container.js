const { createContainer } = require('instances-container');

// repositories
const HotelRepository = require('../domains/hotels/HotelRepository');
const HotelRepositoryMock = require('./repositories/mock/HotelRepositoryMock');

// use cases
const GetHotelsUseCase = require('../applications/usecases/GetHotelsUseCase');

const container = createContainer();

// Register Repository
container.register([
  {
    key: HotelRepository.name,
    Class: HotelRepositoryMock,
  },
]);

// Register Use Case
container.register([
  {
    key: GetHotelsUseCase.name,
    Class: GetHotelsUseCase,
    parameter: {
      injectType: 'destructuring',
      dependencies: [
        {
          name: 'hotelRepository',
          internal: HotelRepository.name,
        },
      ],
    },
  },
]);

module.exports = container;