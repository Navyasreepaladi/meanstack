var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'vivinprasanth2001@gmail.com',
    pass: 'WinterBear96!'
  }
});

var mailOptions = {
  from: 'vivinprasanth2001@gmail.com',
  to: 'paladinavyasree16@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});