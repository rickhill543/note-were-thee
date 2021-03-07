const fs = require('fs');
const path = require('path');

  function getNoteIndex(id, notesArray) {
    const result = notesArray.filter(notesArray => notesArray.id === id)[0];
    console.log("results in getNoteIndex: " + JSON.stringify(result));
    return result;
  }

  module.exports = {
    getNoteIndex
  };