//const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const land19 = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT id, 
           codigo, 
           agua, 
           alcantarillado, 
           barrio, 
           base, 
           direccion, 
           energia, 
           este, 
           fondo,
           frente,
           geom
           FROM catastro.terrenos19 LIMIT 500`
  );
  return result;
};

module.exports = { land19 };
