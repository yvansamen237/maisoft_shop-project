const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const createCustomer = (data, callback) => {
  db.query(
    `INSERT INTO customer (id, firstName, lastName, email, hash, phone,status, createdAt, updateAt) VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.image,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
    ]
  );
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
};
