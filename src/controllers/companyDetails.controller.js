const service = require("../services/companyDetails.servic");
const db = require("../models");

const postDetails = async (req, res) => {
  const { urlLink } = req.body;
  const csvJsonData = await service.getCsvData(urlLink);
  res.status(200).json(csvJsonData);
}

module.exports = {
  postDetails
}