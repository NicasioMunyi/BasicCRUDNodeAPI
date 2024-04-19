import { createCustomer, findAllCustomers } from './customerService.js'

export const createNewCustomer = async (req, res) => {
    try {
        const createdCustomer = await createCustomer(req.body);

        res.status(201).json(createdCustomer)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error Creating customer' });
    }

}

export const allCustomers = async (req, res) => {

    try {
        const customers = await findAllCustomers()
        res.status(200).json(customers);
        console.log(customers);
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "error fecthing customers" });
    }

}
