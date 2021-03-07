var uniqid = require('uniqid');
const router = require('express').Router();
const { getNoteIndex } = require('../../lib/notey');
const { notesArray } = require('../../db/db.json');

router.get('/notes', (req, res) => {
  let results = notesArray;
  // if (req.query) {
  //   results = filterByQuery(req.query, results);
  // }
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

module.exports = router;