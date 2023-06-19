
const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList () 
    .then((characterData) => {console.log(characterData)})
  })   

  document.getElementById('fetch-one').addEventListener('click', function (event) {
    charactersAPI.getOneRegister()
    .then((characterData) => {console.log(characterData)} )

  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    charactersAPI.deleteOneRegister()
    .then((characterData) => {console.log(characterData)})
  });

  document.getElementById('edit-character-form').addEventListener('submit', function (event) {
    charactersAPI.updateOneRegister()
    .then((characterData) => {console.log(characterData)})

  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    charactersAPI.createOneRegister()
    .then((characterData) => {console.log(characterData)})

  });
}); 


