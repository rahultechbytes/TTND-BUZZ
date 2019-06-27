const nodemailer = require('nodemailer');

const mail = (mailDetails) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_ID,
            pass: process.env.PASSWORD
        }
    });

    const { email, title, concern, subject, } = mailDetails;

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: `rahul.jain1@tothenew.com`,                       // sender address
        to: email,                                              // list of receivers
        subject: subject,                                       // Subject line
                                                                // plain text body
        html: `<h1>Title:${title}</h2>
                <p>Concern: ${concern}</p>`                     // html body
    });

}


module.exports = mail


