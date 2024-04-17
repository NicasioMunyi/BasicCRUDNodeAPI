import express from 'express'
import createCustomer from './customerController.js'

const router = express.Router();

router.post('/', createCustomer)


export default router;