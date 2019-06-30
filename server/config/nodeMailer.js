const nodemailer = require('nodemailer');

const mail = (mailDetails) => {

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.USER_ID,
            pass: process.env.PASSWORD
        }
    });

    const { email, subject, name, issueId, department, title, concern, adminEmail, AssignedTo } = mailDetails;

    // send mail with defined transport object
    let info = transporter.sendMail({
        from: `rahul.jain1@tothenew.com`,                       // sender address
        to: email,                                              // list of receivers
        subject: subject,                                       // Subject line
        html: ` <h2>Hello! ${name} <h2/>
                <h3>Complain Details: <h3/>
                <table style="border: 1px solid; border-collapse: collapse">                                          
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid">Complaint Id</th>
                        <td>${issueId}</td>
                    </tr>
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid">Department</th>
                        <td>${department}</td>
                    </tr>
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid">Title</th>
                        <td>${title}</td>
                    </tr>
                    <tr style="border: 1px solid">
                        <th style="border: 1px solid">Concern</th>
                        <td>${concern}</td>
                    </tr>
                    ${(AssignedTo != "null")
                ?
                `   <tr style="border: 1px solid">
                            <th style="border: 1px solid">Assigned To</th>
                            <td>${AssignedTo}</td>
                        </tr>
                        <tr style="border: 1px solid">
                            <th style="border: 1px solid">Admin Email</th>
                            <td>${adminEmail}</td>
                        </tr>
                    `: ""}
                </table>
                <h3>Want to know more <a href="http://localhost:3000">click here</a> to check</h3>
            `
    });

}


module.exports = mail


