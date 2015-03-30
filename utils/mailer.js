var nodemailer = require('nodemailer');
var config = require('./config');

module.exports = function(mailOptions){

	// create reusable transporter object using SMTP transport
	var transporter = nodemailer.createTransport({
	    service: 'Gmail',
	    auth: config.emailAuth // read from config file
	});

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
	    if (error){
	        console.log(error);
	    } else {
	        console.log('Message sent: ' + info.response);
	    }
	});

};



