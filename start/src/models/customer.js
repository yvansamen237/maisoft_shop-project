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
    `INSERT INTO customer (id, firstName, lastName, email, hash, phoneNumber,image, status, CreatedAt, UpdateAt) VALUES (?,?,?,?,?,?,?,?,?,?)`,
    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.hash,
      data.phoneNumber,
      data.image,
      data.status || 'ACTIVE',
      new Date(),
      new Date(),
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const patchCustomerModel = (data, callback) => {
  console.log(data);
  db.query(
    'UPDATE `customer` SET `firstName` = ?, `lastName` =?, `hash` =?, `image`=?, `UpdateAt` = ? WHERE `id` = ?',
    [data.firstName, data.lastName, data.hash, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const deleteCustomerModel = (id, callback) => {
  db.query('DELETE FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
  patchCustomerModel,
  deleteCustomerModel,
};
