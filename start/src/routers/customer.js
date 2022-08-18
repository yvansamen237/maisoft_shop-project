const { Router } = require('express');
const { getAllCustomer } = require('../controllers/customer');

const router = Router();

router.get('/', getAllCustomer);

module.exports = router;
