const { readCustomer } = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    }
    res.json({ success: 1, customer: result });
  });
};

module.exports = { getAllCustomer };
