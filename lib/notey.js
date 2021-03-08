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
    return result;
  }

  function deleteNote(query, notesArray) {
    const note = query;
    let index = notesArray.findIndex(noteIndex => noteIndex.id === note.id);
    for (i=0;i<notesArray.length;i++) {
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