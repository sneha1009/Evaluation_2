const service = require("../services/companyDetails.servic");
const db = require("../models");

const postDetails = async (req, res) => {
  const { urlLink } = req.body;
  const csvJsonData = await service.getCsvData(urlLink);
  res.status(200).json(csvJsonData);
}

const getSectors = async (req, res) => 
{
  const sectorData = service.addSectorData();
  res.status(200).json(sectorData);
}


const getAllScores = async (req, res) => {
  const allScores = await service.getAllScores();
  res.status(200).json(allScores);
};
module.exports = {
  postDetails,
  getSectors,
  getAllScores
}