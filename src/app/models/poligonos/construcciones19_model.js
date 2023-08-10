//const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const building19 = async () => {
  const [result, metadata] = await sequelize.query(
    "SELECT * FROM catastro.construcciones19"
  );
  return result;
};

module.exports = { building19 };
