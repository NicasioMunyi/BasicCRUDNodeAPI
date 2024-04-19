import { canTreatArrayAsAnd } from "sequelize/lib/utils";
import Customer from "./customerModel.js";
export const createCustomer = async (customerData) => {
    try {
        const newCustomer = await Customer.create(customerData);

        return newCustomer;
    } catch (error) {
        throw error;
    }
};

export const findAllCustomers = async () => {
    try {
        const customers = await Customer.findAll();
        return customers;
    } catch (error) {
        throw error;
    }
}

export const deleteCustormer = async (id) => {
    try {
        //find if the customer exists
        const customer = await Customer.findByPk(id);

        // if does not exist
        if (!customer) {
            //throw an error
            throw new Error("Customer not found");
        }
        //else
        //delete customer
        await customer.destroy()

    } catch (error) {
        throw error;
    }
}
