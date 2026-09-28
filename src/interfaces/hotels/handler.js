const GetHotelsUseCase = require('../../applications/usecases/GetHotelsUseCase');

class HotelsHandler {
  constructor(container) {
    this._container = container;

    // bind context
    this.getHotelsHandler = this.getHotelsHandler.bind(this);
  }

  async getHotelsHandler(request, h) {
    const getHotelsUseCase = this._container.getInstance(GetHotelsUseCase.name);
    const hotels = await getHotelsUseCase.execute();

    const response = h.response({
      status: 'success',
      data: {
        hotels,
      },
    });
    response.code(200);
    return response;
  }
}

module.exports = HotelsHandler;