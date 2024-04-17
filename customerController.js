import createNewCustomer from './customerService.js'

const createCustomer = async (req, res) => {
    try {
        const newCustomer = await createNewCustomer(req.body);

        res.status(201).json(newCustomer)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'error Creating customer' });
    }

}
export default createCustomer;