class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl; //http://localhost:8000/characters
  }

  getFullList () {
   return axios.get(`${this.baseURL}`);
  }

  getOneRegister (characterId) {
    return this.BASE_URL.get(`${characterId}`);
  }

  createOneRegister (characterInfo) {
    return this.BASE_URL.post(`/characters`, characterInfo);
  }

  updateOneRegister (characterId, characterInfo) {
    return this.BASE_URL.put(`${characterId}`, characterInfo);
  }

  deleteOneRegister (characterId) {
    return this.BASE_URL.delete(`${characterId}`);
  }
}

module.exports = APIHandler