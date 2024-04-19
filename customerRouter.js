import express from 'express'
import { createNewCustomer, allCustomers } from './customerController.js'

const router = express.Router();

router.post('/', createNewCustomer);
router.get('/', allCustomers);


export default router;