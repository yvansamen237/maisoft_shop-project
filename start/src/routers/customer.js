const { Router } = require('express');
const {
  getAllCustomer,
  getCustomerById,
  createCustomer,
} = require('../controllers/customer');

const router = Router();

router.get('/', getAllCustomer);
router.get('/:id', getCustomerById);
router.post('/:id');

module.exports = router;
