const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
    const note = body;
    // note.iddd = notesArray.length + 10;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  }

  function getNoteIndex(id, notesArray) {
    const result = notesArray.filter(notesArray => notesArray.id === id)[0];
    console.log("results in getNoteIndex: " + JSON.stringify(result));
    return result;
  }

  module.exports = {
      createNewNote,
    getNoteIndex
  };