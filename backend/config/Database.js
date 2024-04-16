import { Sequelize } from 'sequelize';

const db = new Sequelize('employee-management', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;