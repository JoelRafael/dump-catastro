const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.USER,
  process.env.PASSWORD,
  {
    host: process.HOSTDEV,
    port: 5432,
    dialect: "postgres",
  }
);

module.exports = sequelize;
