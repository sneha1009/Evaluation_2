const { getCsvFileJson } = require("../utils/extractAPI");
const db = require("../models");

const getCsvData = async (urlLink) => {
  const csvJsonData = await getCsvFileJson(urlLink);
  return csvJsonData;
}

module.exports = {
  getCsvData
}