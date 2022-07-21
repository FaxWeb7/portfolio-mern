const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioItem = new Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  gitLink: {
    type: String,
    required: true,
  },
  webLink: {
    type: String,
    required: true,
  }
});

const PortfolioList = mongoose.model("PortfolioItem", portfolioItem);

module.exports = PortfolioList;
