const sequelize = require("../../database/conexion");

const getAllTipoDoc = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT * FROM catastro.tipo_documento`
  );
  return result;
};

module.exports = { getAllTipoDoc };
