const express = require('express');
const app = express();
const db = require('./start/src/config/db');
const env = require('./start/src/config/env');

// import routes
// const couponRoutes = require('./start/src/routers/couponRoutes');
const customerRoutes = require('./start/src/routers/customer');

// middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// connection to database
db.connect((err) => {
  if (err) {
    console.log('Db connection error' + err);
    return;
  }
  console.log('Db connected !');
});

// define middleware route
app.use('/api/customer', customerRoutes);
// app.use('/api/coupon', couponRoutes);

// listening to the request
const port = env.port;
app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
