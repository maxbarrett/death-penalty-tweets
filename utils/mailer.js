const nodemailer = require('nodemailer');
const config = require('./config').emailAuth;

module.exports = function(mailOptions) {

    // create reusable transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: config.emailAuth, // read from config file
    });

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.response);
        }
    });

};
