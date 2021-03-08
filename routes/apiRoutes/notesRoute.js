var uniqid = require('uniqid');
const router = require('express').Router();
const { createNewNote, getNoteIndex } = require('../../lib/notey');
const { notesArray } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notesArray;
  console.log("req.query: " + req.query);
  res.send(results);
});

router.get('/notes/:id', (req, res) => {
  const result = getNoteIndex(req.params.id, notesArray);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post('/notes', (req, res) => {
    req.body.id = uniqid();
    console.log("req.body: " + req.body.id);
    console.log(req.body.id);
    const note = createNewNote(req.body, notesArray);
    res.json(note);
});

router.get('/notes/:id', (req, res) => {
  const result = getNoteIndex(req.params.id, notesArray);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

module.exports = router;