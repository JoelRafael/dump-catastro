const { QueryTypes } = require("sequelize");
const sequelize = require("../../database/conexion");

const save = async (prop) => {
  const [result, metadata] = await sequelize.query(
      `INSERT INTO catastro.titular(id, nombre, apellidos, documento, tipo_doc, caracter, documento_prop, adquisicion)VALUES(:id, :nombre, :apellido, 
                                                                                                                              :documento, :tipo_doc, :caracter,
                                                                                                                              :documento_prop, :adquisicion)`,
      {
          replacements: {
              id: prop.id,
              nombre: prop.nombre,
              apellido: prop.apellido,
              documento: prop.documento,
              tipo_doc: prop.tipo_doc,
              caracter: prop.caracter,
              documento_prop: prop.documento_prop,
              adquisicion:prop.adquisicion
        }
      }
  );
  return result;
};

const searchbyDocument = async (document, id) => {
    const [result, metadata] = await sequelize.query(
      `SELECT nombre FROM catastro.titular t WHERE t.documento = :document AND t.id =:id`,
      {
          replacements: {
              document: document,
              id: id
          },
      }
    );
    return result;
};

module.exports = { save, searchbyDocument };
