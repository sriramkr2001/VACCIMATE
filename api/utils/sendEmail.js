const nodemailer = require("nodemailer");

const sendEmail = (options) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "sriramkrishnamuthy2001@gmail.com",
      pass: "qwasertyxyz123",
    },
  });

  const mailOptions = {
    from: "sriramkrishnamuthy2001@gmail.com",
    to: options.to,
    subject: options.subject,
    html: options.text,
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
};

module.exports = sendEmail;
