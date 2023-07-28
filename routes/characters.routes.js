const express = require('express');
const router = express.Router();
const APIHandler = require('/public/javascript/APIHandler');
const apiService = new APIHandler();

// List all the characters from the API.
router.get('/characters/list', (req, res) => {
  apiService
    .getFullList()
    .then((response) => {
      res.json(response.data);
      // res.render('pages/characters-list', { characters: response.data }) // <== leave this line commented for now
    })
    .catch(error => console.log(error));

});

// Render a form to create a new character.
router.get('/characters/create', (req, res) => {
  res.send(`Here we'll render the form to create a new characters`);

});

// Submit info to create a new character 
router.post('/characters/create', (req, res) => {
  const characterInfo = req.body;
  apiService
    .createOneRegister(characterInfo)
    .then((response) => {
      res.json(response.data);
      // res.redirect('/characters/list'); // <== leave this line commented for now
    })
    .catch((error) => console.log(error));
});
 



// Render a form to edit a character.
router.get('/characters/edit/:id', (req, res) => {
  res.send(`Here we'll render the form to update character with ID ${req.params.id}`);
});




// Submit info to edit a character with a matching id.
router.post('/characters/edit/:id', (req, res) => {
  const characterId = req.params.id;
  const characterInfo = req.body;
 
  apiService
    .updateOneRegister(characterId, characterInfo)
    .then((response) => {
      res.json(response.data);
      // res.redirect('/characters/list'); // <== leave this line commented for now
    })
    .catch((error) => console.log(error));
});


 
// Delete a character with a matching id.
router.get('/characters/delete/:id', (req, res) => {
  const characterId = req.params.id;
 
  apiService
    .deleteOneRegister(characterId)
    .then((response) => {
       res.json(response.data);
      // res.redirect(`/characters/list`); // <== leave this line commented for now
    })
    .catch(error => console.log(error));
});
 
module.exports = router;