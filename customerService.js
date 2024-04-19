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
