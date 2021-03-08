// setup necessary dependencies
var uniqid = require('uniqid');
const router = require('express').Router();
const { createNewNote, getNoteIndex, deleteNote } = require('../../lib/notey');
const { notesArray } = require('../../db/db.json');

// gets database of notes
router.get('/notes', (req, res) => {
  let results = notesArray;
  res.send(results);
});

// checks for query parameters of notes
router.get('/notes/:id', (req, res) => {
  const result = getNoteIndex(req.params.id, notesArray);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

// writes note data to database
router.post('/notes', (req, res) => {
    // uses uniqid package to set a unique id
    req.body.id = uniqid();
    const note = createNewNote(req.body, notesArray);
    res.json(note);
});

// deletes note from database
router.delete('/notes/:id', (req, res) => {
  const noteIndex = getNoteIndex(req.params.id, notesArray);
  const dlt = deleteNote(noteIndex, notesArray);
  res.json(dlt);
});

module.exports = router;