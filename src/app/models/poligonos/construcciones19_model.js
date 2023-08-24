//const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const building19 = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT c.id,
            c.aire,
            c.anyo,
            c.ascensores,
            c.calefaccion,
            c.cod,
            c.dormitorios,
            c.escalera,
            c.geom,
            c.lavanderia,
            c.plantas,
            c.sanitarios,
            c.servicio,
            c.tanque,
            co.id idConservacion,
            co.estado estadoConservacion,
            co.valor Conservacion,
            r.id idrevestimiento,
            r.revestimiento
            FROM catastro.construcciones19 c 
            LEFT JOIN catastro.conservacion co ON c.conservacion = co.id
            LEFT JOIN catastro.revestimiento r ON c.revestimiento = r.id
            LIMIT 500`
  );
  return result;
};

const getByCodigo = async (value) => {
  const [result, metadata] = await sequelize.query(
    `SELECT c.id,
            c.aire,
            c.anyo,
            c.ascensores,
            c.calefaccion,
            c.cod,
            c.dormitorios,
            c.escalera,
            c.geom,
            c.lavanderia,
            c.plantas,
            c.sanitarios,
            c.servicio,
            c.tanque,
            co.id idConservacion,
            co.estado estadoConservacion,
            co.valor Conservacion,
            r.id idrevestimiento,
            r.revestimiento
            FROM catastro.construcciones19 c 
            LEFT JOIN catastro.conservacion co ON c.conservacion = co.id
            LEFT JOIN catastro.revestimiento r ON c.revestimiento = r.id
            WHERE c.codigo IN(:value)`,
    {
      replacements: { value: value }
      
    }
  );
  return result;
};
module.exports = { building19, getByCodigo };
