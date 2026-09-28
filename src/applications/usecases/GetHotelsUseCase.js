class GetHotelsUseCase {
  constructor({ hotelRepository }) {
    this._hotelRepository = hotelRepository;
  }

  async execute() {
    const hotels = await this._hotelRepository.getHotels();
    return hotels;
  }
}

module.exports = GetHotelsUseCase;