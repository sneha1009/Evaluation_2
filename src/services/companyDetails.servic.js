const { getCsvFileJson, getData, getSector } = require("../utils/extractAPI");
const db = require("../models");

const getCsvData = async (urlLink) => {
  const csvJsonData = await getCsvFileJson(urlLink);
  //console.log(csvJsonData)
  return csvJsonData;
}
const addCompanyData = async (companyData) => {
  const fetchedData = await getData(companyData.company_id);
  const newCompanyData = {
    companyId: fetchedData.id,
    name: fetchedData.name,
    tags: fetchedData.tags[0],
    ceo: fetchedData.ceo
  };
  const data = await db.companies.create(newCompanyData);
  return data;
};

const addSectorData = async () => {
  const companyData = await getSector();
  const newSectorData = companyData.map(sector => {
    return {
      companyId: sector.companyId,
      score: (((sector.performanceIndex[0].value * 10) +
        (sector.performanceIndex[1].value / 10000) +
        (sector.performanceIndex[2].value * 10) +
        sector.performanceIndex[3].value) / 4)
    };
  });
  const data = await db.sectors.bulkCreate(newSectorData);
  return data;
};

module.exports = {
  getCsvData,
  addCompanyData,
  addSectorData
}