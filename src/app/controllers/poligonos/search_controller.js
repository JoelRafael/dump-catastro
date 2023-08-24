const { response } = require("express");
const { defaultSucces, defaulMessage } = require("../../helpers/script");
const {
  getbyCatastro,
  getbyDocument,
} = require("../../models/poligonos/terrenos19_model");
const {
  getByCodigo,
} = require("../../models/poligonos/construcciones19_model");
const get = async (req, res = response) => {
  let terrenos;
  let construcciones;
  let codigos = [];

  const cases = req.params.type;
  switch (cases) {
    case "1":
      terrenos = await getbyCatastro(req.params.value);
      codigos = req.params.value;

      break;
    case "2":
      terrenos = await getbyCatastro(req.params.value);
      terrenos.forEach((element) => {
        codigos.push(element.codigo);
      });
      break;
    case "3":
      const cases = Number(req.params.value);
      if (isNaN(cases))
        return defaulMessage(res, "Tiene que ser un valor numerico", 400);
      terrenos = await getbyDocument(req.params.value);
      terrenos.forEach((element) => {
        codigos.push(element.codigo);
      });
      break;

    default:
      console.log("default");
  }
  construcciones = await getByCodigo(codigos);

  return defaultSucces(res, { terrenos, construcciones }, "", 200);
};

module.exports = { get };
