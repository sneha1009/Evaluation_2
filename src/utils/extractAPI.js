const { default: axios } = require("axios");
const csvToJson = require("csvtojson");

const getCsvFileJson = async (urlLink) => {
  const file = await axios({
    method: "GET",
    url: urlLink,
  });

  const jsonData = await csvToJson().fromString(file.data);
  return jsonData;
}
module.exports = {
  getCsvFileJson,
};