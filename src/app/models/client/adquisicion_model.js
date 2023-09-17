const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const getAllAd = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT * FROM catastro.adquisicion`
  );
  return result;
};

module.exports = { getAllAd };
