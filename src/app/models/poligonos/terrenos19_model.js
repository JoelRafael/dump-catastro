//const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const land19 = async () => {
  const [result, metadata] = await sequelize.query(
    `SELECT t.id, 
          t.codigo, 
          t.agua, 
          t.alcantarillado, 
          t.barrio, 
          t.base, 
          t.direccion, 
          t.energia, 
          t.este, 
          t.fondo,
          t.frente,
          t.internet,
          t.manzano,
          t.norte,
          t.oeste,
          t.predio,
          t.subpredio,
          t.superficie,
          t.suptest,
          t.sur,
          t.telefono,
          t.transporte,
          ti.nombre,
          ti.apellidos,
          ti.documento,
          ad.adquisicion,
          ad.codigo codigoadquisicion,
          f.forma,
          f.valor,
          f.codigo codigoforma,
          m.material,
          m.valor,
          tv.tipo,
          tv.valor valortipovia,
          t.geom
          FROM catastro.terrenos19 t 
          JOIN catastro.titular ti ON t.id = ti.id
          JOIN catastro.adquisicion ad ON ad.id = ti.adquisicion
          LEFT JOIN catastro.forma f ON f.id = t.forma
          LEFT JOIN catastro.material_via m ON m.id = t.material_via
          LEFT JOIN catastro.tipo_via tv ON tv.id = t.via
          LEFT JOIN catastro.caracter_titular c ON c.id = t.via`
  );
  return result;
};

module.exports = { land19 };
