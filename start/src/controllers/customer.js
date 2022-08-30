const db = require('../config/db');
const {
  readCustomer,
  readCustomerById,
  createCustomer,
  patchCustomerModel,
  deleteCustomerModel,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  patchCustomerModel(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, res: result });
    }
  });
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  deleteCustomerModel(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, res: result });
    }
  });
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
};
