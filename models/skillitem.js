const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const skillItem = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  exp: {
    type: Object,
    required: true
  }
});

const SkillList = mongoose.model("SkillItem", skillItem);

module.exports = SkillList;
