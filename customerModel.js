import Sequelize from "sequelize";
import sequelize from "./database.js";

import { v4 as uuidv4 } from 'uuid'

const Customer = sequelize.define('customer_table', {
    id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: () => uuidv4()

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

export default Customer;
