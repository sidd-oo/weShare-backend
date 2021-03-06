const nodemailer = require("nodemailer");

const sendMail = async ({ from, to, subject, text, html }) => {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `weShare <${from}>`, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
    html: html, // html body
});
};


module.exports = sendMail;
