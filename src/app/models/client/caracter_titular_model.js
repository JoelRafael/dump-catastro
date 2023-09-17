const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const getAllCaract = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT * FROM catastro.caracter_titular`
  );
  return result;
};

module.exports = { getAllCaract };
