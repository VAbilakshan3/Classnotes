var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abilakshan3@gmail.com',
    pass: '*********'
  }
});

var mailOptions = {
  from: 'abilakshan3@gmail.com',
  to: ' info@uki.life',
  subject: 'Testing my nodemailer module',  
  html:'<h1>Abilakshan</h1><p>That is easy !</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});