const express = require("express");
const nodemailer = require("nodemailer");
const UserRouter = express.Router();
const bodyParser = require("body-parser");
UserRouter.use(bodyParser.json());
const User = require("../models/User");
var otp;
var UserCrentials;

UserRouter.route("/signIn")
  .get((req, res, next) => {
    User.find({}).then((data) => {
      console.log(data);
      res.json(data);
    });
  })
  .post((req, res, next) => {
    User.find({ UserName: req.body.UserName })
      .then((data) => {
        if (data.length != 0) {
          const err = new Error("Username alerady exists");
          err.statusCode = 403;
          next(err);
        } else {
          UserCrentials = req.body;
          otp = Math.floor(Math.random() * 100000);
          let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            service: "Gmail",

            auth: {
              user: "testotps001@gmail.com",
              pass: "V.Tharun001",
            },
          });
          var mailOptions = {
            to: req.body.Email,
            subject: `Otp for registration is: ${otp} `,
            html:
              "<h3>OTP for account verification is </h3>" +
              "<h1 style='font-weight:bold;'>" +
              otp +
              "</h1>", // html body
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
          });
        }
      })
      .catch((err) => next(err));
  });
UserRouter.route("/Otp")
  .get((req, res, next) => {
    console.log(otp);
    res.send({ OTP: otp });
  })
  .post((req, res, next) => {
    console.log(otp, req.body);
    if (otp == req.body.Otp) {
      res.json({ success: true });
      User.create(UserCrentials)
        .then((data) => console.log(data))
        .catch((err) => next(err));
    } else {
      res.json({ success: false });
    }
  });
module.exports = UserRouter;
