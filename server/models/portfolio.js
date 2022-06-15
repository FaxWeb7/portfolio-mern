const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const portfolioListSchema = new Schema({
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

const PortfolioList = mongoose.model("PortfolioList", portfolioListSchema);

module.exports = PortfolioList;
