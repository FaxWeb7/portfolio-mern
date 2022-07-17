const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioListScItem = new Schema({
  src: {
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

const PortfolioItem = mongoose.model("PortfolioList", portfolioListScItem);

module.exports = PortfolioItem;
