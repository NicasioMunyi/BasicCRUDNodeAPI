import Customer from "./customerModel.js";

async function createCustomer(customerData) {
    try {
        const newCustomer = await Customer.create(customerData);

        return newCustomer;
    } catch (error) {
        throw error;
    }
};

export default createCustomer;