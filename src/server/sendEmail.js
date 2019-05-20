"use strict";
require("dotenv").config();
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.GMAIL_USERNAME, // generated ethereal user
    pass: process.env.GMAIL_PASSWORD, // generated ethereal password
  },
});

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

router.post("/send", (req, res, next) => {
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var content = `name: ${name} \n email: ${email} \n message: ${content} `;

  transporter.sendMail(
    {
      from: `"${name}" <${email}>`, // sender address
      to: "patrik.sterba@gmail.com, patrik.sterba@gmail.com", // list of receivers
      subject: `Nová zpráva od ${name} ze serveru systemofthedown.cz`, // Subject line
      text: message, // plain text body
      html: message, // html body
    },
    (err, data) => {
      if (err) {
        res.json({
          msg: "fail",
        });
      } else {
        res.json({
          msg: "success",
        });
      }
    }
  );
});
