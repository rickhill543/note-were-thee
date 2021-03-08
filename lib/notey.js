// setup necessary dependencies
const fs = require('fs');
const path = require('path');

// function that writes a new note to the database
function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify({ notesArray }, null, 2)
    );
    return note;
  }

  // function that retireves the index of selected note
  function getNoteIndex(id, notesArray) {
    const result = notesArray.filter(notesArray => notesArray.id === id)[0];
    return result;
  }

  // function that deletes note from database
  function deleteNote(query, notesArray) {
    const note = query;
    let index = notesArray.findIndex(noteIndex => noteIndex.id === note.id);
    // checks the database for matching id
    for (i=0;i<notesArray.length;i++) {
      // if id matches, delete note and rewrite database
        if (note.id == notesArray[i].id) {
            notesArray.splice(index, 1);
            fs.writeFileSync(
                path.join(__dirname, '../db/db.json'),
                JSON.stringify({ notesArray }, null, 2)
              );
        }
    }
    return notesArray;
  }

  module.exports = {
    createNewNote,
    getNoteIndex,
    deleteNote
  };