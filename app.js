const express = require('express');
const app = express();
const db = require('./start/src/config/db');
const env = require('./start/src/config/env');
const customerRoutes = require('./start/src/routers/customer');

console.log(env);

db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('Db connected !');
});

const port = env.port;

app.use('/api/customer', customerRoutes);
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
