import express from "express";
import customerRoutes from './customerRouter.js'

const PORT = 8080;

const app = express();

app.use(express.json());

// Endpoint to return the database hostname securely
app.get("/", (req, res) => {
    res.send('Welcome to Customers API Endpoints');
});


app.use('/customers', customerRoutes)

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
