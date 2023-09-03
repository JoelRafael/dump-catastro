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
          t.geom geometry
          FROM catastro.terrenos19 t 
          JOIN catastro.titular ti ON t.titular = ti.id
          JOIN catastro.adquisicion ad ON ad.id = ti.adquisicion
          LEFT JOIN catastro.forma f ON f.id = t.forma
          LEFT JOIN catastro.material_via m ON m.id = t.material_via
          LEFT JOIN catastro.tipo_via tv ON tv.id = t.via
          LEFT JOIN catastro.caracter_titular c ON c.id = t.via
          LIMIT 500`
  );
  return result;
};
const getbyCatastro = async (value) => {
  const [result, metadata] = await sequelize.query(
    `SELECT  JSONB_BUILD_OBJECT('valortipovia', tv.valor,
                           'tipo',tv.tipo,
                           'valor',m.valor,
                           'material', m.material,
                           'codigoforma', f.codigo,
                           'adquisicion', ad.adquisicion,
                           'codigoadquisicion', ad.codigo,
                           'documento', ti.documento,
                           'apellidos',ti.apellidos,
                           'nombre',ti.nombre,
                           'transporte',t.transporte,
                           'telefono',t.telefono,
                           'sur',t.sur,
                           'suptest',t.suptest,
                           'superficie',t.superficie,
                           'subpredio',t.subpredio,
                           'predio',t.predio,
                           'id',t.id,
                           'codigo',t.codigo, 
                           'agua',t.agua, 
                           'alcantarillado',t.alcantarillado, 
                           'barrio',t.barrio, 
                           'base',t.base, 
                           'direccion',t.direccion, 
                           'energia',t.energia, 
                           'este',t.este, 
                           'fondo',t.fondo,
                           'frente',t.frente,
                           'internet',t.internet,
                           'manzano',t.manzano,
                           'norte',t.norte,
                           'oeste',t.oeste
                          ) properties,
                          'Feature' as type,
                          t.geom geometry
          FROM catastro.terrenos19 t 
          JOIN catastro.titular ti ON t.titular = ti.id
          JOIN catastro.adquisicion ad ON ad.id = ti.adquisicion
          LEFT JOIN catastro.forma f ON f.id = t.forma
          LEFT JOIN catastro.material_via m ON m.id = t.material_via
          LEFT JOIN catastro.tipo_via tv ON tv.id = t.via
          LEFT JOIN catastro.caracter_titular c ON c.id = t.via
          WHERE t.codigo ='${value}' 
          OR ti.nombre LIKE '%${value}%'`,
    {
      nest: false,
    }
  );
  return result;
};
const getbyDocument = async (value) => {
  const [result, metadata] = await sequelize.query(
    `SELECT  JSONB_BUILD_OBJECT('valortipovia', tv.valor,
                           'tipo',tv.tipo,
                           'valor',m.valor,
                           'material', m.material,
                           'codigoforma', f.codigo,
                           'adquisicion', ad.adquisicion,
                           'codigoadquisicion', ad.codigo,
                           'documento', ti.documento,
                           'apellidos',ti.apellidos,
                           'nombre',ti.nombre,
                           'transporte',t.transporte,
                           'telefono',t.telefono,
                           'sur',t.sur,
                           'suptest',t.suptest,
                           'superficie',t.superficie,
                           'subpredio',t.subpredio,
                           'predio',t.predio,
                           'id',t.id,
                           'codigo',t.codigo, 
                           'agua',t.agua, 
                           'alcantarillado',t.alcantarillado, 
                           'barrio',t.barrio, 
                           'base',t.base, 
                           'direccion',t.direccion, 
                           'energia',t.energia, 
                           'este',t.este, 
                           'fondo',t.fondo,
                           'frente',t.frente,
                           'internet',t.internet,
                           'manzano',t.manzano,
                           'norte',t.norte,
                           'oeste',t.oeste
                          ) properties,
                          'Feature' as type,
                          t.geom geometry
          FROM catastro.terrenos19 t 
          JOIN catastro.titular ti ON t.titular = ti.id
          JOIN catastro.adquisicion ad ON ad.id = ti.adquisicion
          LEFT JOIN catastro.forma f ON f.id = t.forma
          LEFT JOIN catastro.material_via m ON m.id = t.material_via
          LEFT JOIN catastro.tipo_via tv ON tv.id = t.via
          LEFT JOIN catastro.caracter_titular c ON c.id = t.via
          WHERE ti.documento = ${value} 
          `,
    {
      nest: true,
    }
  );
  return result;
};
module.exports = { land19, getbyCatastro, getbyDocument };
