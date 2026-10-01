// write code here
'use strict';
/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');

function moveFile(from, destination) {
  if (!from || !destination) {
    return console.error('Not enough args');
  }

  const isFileExist = fs.existsSync(from);
  const isFile = isFileExist && fs.statSync(from).isFile();

  if (!isFile) {
    return console.error('Is not a file');
  }

  const isDierctoryExist = fs.existsSync(destination);
  const isDirectory =
    isDierctoryExist && fs.statSync(destination).isDirectory();

  const endsWithSlash = destination.endsWith('/');

  if (endsWithSlash && !isDirectory) {
    return console.error('Destination is not existed');
  }

  const file = path.basename(from);
  const finalPath = isDirectory ? path.join(destination, file) : destination;

  fs.rename(from, finalPath, (err) => {
    if (err) {
      return console.error('Incorrect name');
    }
  });
}

moveFile(process.argv[2], process.argv[3]);
