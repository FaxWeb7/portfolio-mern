const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const PortfolioList = require("./models/portfolioItem");
const SkillList = require("./models/skillitem")
const transporter = require("./helpers/transporter")
const nodemailer = require('nodemailer');
const chalk = require("chalk");
const cors = require('cors')

const successMsg = chalk.bgKeyword("green").white.bold;
const errorMsg = chalk.bgKeyword("white").red;
const reqMsg = chalk.bgKeyword("purple").cyan.bold.underline;

const app = express();

mongoose  
  .connect(process.env.MONGO_URL)  
  .then((res) => console.log(successMsg('Connected to DB'))) 
  .catch((error) => console.log(errorMsg(error))); 

app.listen(process.env.PORT, (error) => {
  error
    ? console.log(errorMsg(error))
    : console.log(successMsg(`Listening port ${process.env.PORT}`));
});

app.use(
  morgan(
    reqMsg(":method :url :status :res[content-length] - :response-time ms")
  )
);
app.use(cors({
  origin: process.env.CLIENT_URL
}))
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: false }));


app.get("/api/portfolio", (req, res) => {
  PortfolioList
    .find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
});

app.get("/api/skills", (req, res) => {
  SkillList
    .find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err))
});

app.post("/api/sendmail", (req, res) => {
  const { message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: 'Заявка с сайта FaxWeb.ru',
    text: message
  }

  transporter.sendMail(mailOptions, (err, info) => err ? res.status(500) : res.status(200))
});
