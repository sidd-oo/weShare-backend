const nodemailer = require("nodemailer");

const sendMail = async ({ from, to, subject, text, html }) => {
  console.log("email service start");
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
    from: `weShare <${from}>`,
    to,
    subject,
    text,
    html,
  });
  
  console.log("email service end");
  console.log(info);
};


module.exports = sendMail;
