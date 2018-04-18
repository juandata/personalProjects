var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jtabares@nisum.com',
    pass: 'Mimosin1988'
  }
});

var mailOptions = {
  from: 'jtabares@nisum.com',
  to: 'juandavidtabaresarce@gmail.com',
  subject: 'Sending Email using Node.js',
  html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
