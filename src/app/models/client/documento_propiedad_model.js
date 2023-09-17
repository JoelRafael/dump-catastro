
const sequelize = require("../../database/conexion");

const getAllDocumentoP = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT * FROM catastro.documento_propiedad`
  );
  return result;
};

module.exports = { getAllDocumentoP };
