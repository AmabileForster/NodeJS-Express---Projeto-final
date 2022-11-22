const Sequilize = require('sequelize');
require("dotenv").config();

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequilize = new Sequilize(dbName, dbUser, dbPassword, {
    dialect:"mysql",
    host: dbHost,
});

module.exports = sequilize;