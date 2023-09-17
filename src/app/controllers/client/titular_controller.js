const { response } = require("express");
const { defaultSucces, defaulMessage } = require("../../helpers/script");
const { save, searchbyDocument } = require("../../models/client/titular_model");
const { getAllAd } = require("../../models/client/adquisicion_model");
const { getAllCaract } = require("../../models/client/caracter_titular_model");
const { getAllDocumentoP } = require("../../models/client/documento_propiedad_model");
const { getAllTipoDoc } = require("../../models/client/tipo_documento_model");

const saveTitular = async (req, res = response) => {
  if (JSON.stringify(req.body) === "{}")
    return defaulMessage(res, "Tienes que enviar un titular", 400);

    const titular = await searchbyDocument(req.body.documento);
    
  if (titular.length != 0)
    return defaulMessage(res, "Titular existente", 400);

  const data = await save(req.body);
  return defaultSucces(res, "Titular guardado con exito", 201);
};

const getAllAdquisicion = async (req, res = response) => {
    const data = await getAllAd()
    return defaultSucces(res, data, 200);
}

const getAllCaracterTitular = async (req, res = response) => {
      const data = await getAllCaract();
      return defaultSucces(res, data, 200);
};

const getAllDocumentoProp = async (req, res = response) => {
      const data = await getAllDocumentoP();
      return defaultSucces(res, data, 200);
};

const getAllTipoDocumento = async (req, res = response) => {
      const data = await getAllTipoDoc();
      return defaultSucces(res, data, 200);
};


  module.exports = {
    saveTitular,
    getAllAdquisicion,
    getAllCaracterTitular,
    getAllDocumentoProp,
    getAllTipoDocumento,
  };
