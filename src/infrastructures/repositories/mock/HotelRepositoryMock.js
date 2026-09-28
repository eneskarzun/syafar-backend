const HotelRepository = require('../../../domains/hotels/HotelRepository');
const Hotel = require('../../../domains/hotels/entities/Hotel');

class HotelRepositoryMock extends HotelRepository {
  async getHotels() {
    const hotels = [
      new Hotel({ id: 1, name: 'Fairmont Makkah', city: 'Makkah', rate: 1500 }),
      new Hotel({ id: 2, name: 'Pullman Zamzam Makkah', city: 'Makkah', rate: 1100 }),
      new Hotel({ id: 3, name: 'Movenpick Makkah', city: 'Makkah', rate: 1250 }),
      new Hotel({ id: 4, name: 'Anwar Al Madinah Movenpick', city: 'Madinah', rate: 900 }),
      new Hotel({ id: 5, name: 'Emaar Royal Madinah', city: 'Jakarta', rate: 650 }),
    ];
    return hotels;
  }
}

module.exports = HotelRepositoryMock;