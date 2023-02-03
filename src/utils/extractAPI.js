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

const getData = async (companyId) => {
  const getCompanyData = await axios({
    method: "GET",
    url: `http://54.167.46.10/company/${companyId}`
  });
  console.log(getCompanyData.data);
  return getCompanyData.data;
};

const getSector = async () => {
  const sectorData = await axios({
    method: "GET",
    url: "http://54.167.46.10/sector?name=Software"
  });
  console.log(sectorData.data);
  return sectorData.data;
};

module.exports = {
  getCsvFileJson,
  getData,
  getSector
};