class APIHandler {
  constructor (baseUrl) {
        this.BASE_URL = baseUrl; //http://localhost:8000/characters
        this.api = axios.create({baseUrl: baseUrl})
}

  getFullList () {
   return this.api.get(`/characters`)
   .then((response) => {return response.data});
   //.catch((err) => {console.log(err)})
  }

  getOneRegister (characterId) {
    return this.api.get(`/characters/${characterId}`)
    .then((response) => {return response.data});
    //.catch((err) => {console.log(err)})
  }

  createOneRegister (characterInfo) {
    return this.api.post(`/characters`, characterInfo)
    .then((response) => {return response.data});

  }

  updateOneRegister (characterId, characterInfo) {
    return this.api.put(`/characters/${characterId}`, characterInfo)
    .then((response) => {return response.data});
  }

  deleteOneRegister (characterId) {
    return this.api.delete(`/characters/${characterId}`)
    .then((response) => {return response.data});
  }
}



