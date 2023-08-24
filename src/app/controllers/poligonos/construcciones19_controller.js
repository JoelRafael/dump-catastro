const { response } = require("express");
const { defaultSucces, defaulMessage } = require("../../helpers/script");


const { building19 } = require("../../models/poligonos/construcciones19_model");
const getBuilding = async (req, res = response) => {
  const result = await building19();
  return defaultSucces(res, result, "", 200);
};
module.exports = { getBuilding };
