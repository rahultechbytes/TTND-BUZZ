// const sgMail = require('@sendgrid/mail');


// sgMail.setApiKey(process.env.SENDGRID_API_KEY);
// console.log(process.env.SENDGRID_API_KEY)

// const sendGridMail = ({userEmail, adminEmail, title, concern, subject, body,name}) => {
//     console.log("subject",subject)
//     const msg = {
//         to: userEmail,
//         from: "varnitgoyal95@gmail.com",
//         subject: subject,
//         text: `hello ${name}`,
//         html: `<h1>Title:${title}</h2>
//                  <p>Concern: ${concern}</p>`
//     };
//     sgMail.send(msg).then(res=>{
//         console.log('response from send grid',res);
//     }).catch(err=>{
//         console.log('error from send grid',err);
//     })
// }


// module.exports = sendGridMail;


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
        to: email,                                          // list of receivers
        subject: subject,                                     // Subject line
        // plain text body
        html: `<h1>Title:${title}</h2>
                <p>Concern: ${concern}</p>`                  // html body
    });

}


module.exports = mail

