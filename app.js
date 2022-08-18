const express = require('express');
const app = express();
const db = require('./start/src/config/db');

db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('Db connected !');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
