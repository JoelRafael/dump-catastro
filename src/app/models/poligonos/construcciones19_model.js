//const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const building19 = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT c.id,
            c.cod,
            c.codigo,
            c.aire,
            c.anyo,
            c.ascensores,
            c.calefaccion,
            c.cod,
            c.dormitorios,
            c.escalera,
            c.geom geometry,
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
    `SELECT 
            JSONB_BUILD_OBJECT(
              'id',                  c.id,
              'cod',                 c.cod,
              'codigo',              c.codigo,
              'aire',                c.aire,
              'anyo',                c.anyo,
              'ascensores',          c.ascensores,
              'calefaccion',         c.calefaccion,
              'cod',                 c.cod,
              'dormitorios',         c.dormitorios,
              'escalera',            c.escalera,
              'lavanderia',          c.lavanderia,
              'plantas',             c.plantas,
              'sanitarios',          c.sanitarios,
              'servicio',            c.servicio,
              'tanque',              c.tanque,
              'idConservacion',      co.id ,
              'estadoConservacion',  co.estado ,
              'Conservacion',        co.valor ,
              'idrevestimiento',     r.id ,
              'revestimiento',       r.revestimiento
                 ) properties,
                 'Feature' as type,
            c.geom geometry     
            FROM catastro.construcciones19 c 
            LEFT JOIN catastro.conservacion co ON c.conservacion = co.id
            LEFT JOIN catastro.revestimiento r ON c.revestimiento = r.id
            WHERE c.codigo IN(:value)`,
    {
      replacements: { value: value },
    }
  );
  return result;
};
module.exports = { building19, getByCodigo };
