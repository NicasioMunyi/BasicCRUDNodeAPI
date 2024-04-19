import express from 'express'
import { createNewCustomer, allCustomers, deleteCustomerById, UpdateCustomer } from './customerController.js'

const router = express.Router();

// route for creating a customer
router.post('/', createNewCustomer);
//route for creating  a customer
router.get('/', allCustomers);

//route for deleting a customer
router.delete('/delete/:id', deleteCustomerById);

//route for updating a customer
router.put('/update/:id', UpdateCustomer);


export default router;