import Sequelize from "sequelize";
import sequelize from "./database.js";

const Customer = sequelize.define('customer_table', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    registration_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

export default Customer;
