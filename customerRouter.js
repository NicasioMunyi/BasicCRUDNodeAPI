import express from 'express'
import { createNewCustomer, allCustomers, deleteCustomerById } from './customerController.js'

const router = express.Router();
router.post('/', createNewCustomer);
router.get('/', allCustomers);
router.delete('/:id', deleteCustomerById);


export default router;