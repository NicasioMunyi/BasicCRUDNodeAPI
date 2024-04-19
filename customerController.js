import { createCustomer, findAllCustomers, deleteCustormer, updateCustomer } from './customerService.js'

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
export const deleteCustomerById = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteCustormer(id);
        res.status(200).json({ message: "customer Succesfully deleted" })
    } catch (error) {
        console.error(error)

        res.status(500).json({ message: "Failed to delete customer" })
    }
}
export const UpdateCustomer = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const upadatedCustomer = await updateCustomer(id, data)
        res.status(200).json(upadatedCustomer);
    } catch (error) {
        console.error(error);

        if (error.message === "Customer Not found") {
            res.status(404).json({ message: "Customer Not found" })
        } else {
            res.status(500).json({ message: "Error Updating Customer" });
        }

    }

}
