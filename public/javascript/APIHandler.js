const axios = require('axios');

class APIHandler {
  constructor () {
    this.api = axios.create ({
      baseURL: 'http://localhost:8000'
    });
  }

  getFullList () {
    return this.api.get('/characters/list');
  }

  getOneRegister () {
    return this.api.get(`/characters/${characterId}`);
  }

  createOneRegister () {
    return this.api.post(`/characters`, characterInfo);
  }

  updateOneRegister () {
    return this.api.put(`/characters/${characterId}`, characterInfo);
  }

  deleteOneRegister () {
    return this.api.delete(`/characters/${characterId}`);
  }
}

module.exports = APIHandler;