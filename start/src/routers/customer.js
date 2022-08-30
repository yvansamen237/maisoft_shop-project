const { Router } = require('express');
const {
  getAllCustomer,
  getCustomerById,
  createCustomer,
  postCustomer,
  patchCustomer,
  deleteCustomer,
} = require('../controllers/customer');

const router = Router();

router.get('/', getAllCustomer);
router.post('/', postCustomer);
router.get('/:id', getCustomerById);
router.patch('/', patchCustomer);
router.delete('/:id', deleteCustomer);

module.exports = router;
