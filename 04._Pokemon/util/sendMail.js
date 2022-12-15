import nodemailer from "nodemailer";

async function main() {
     let testAccount = await nodemailer.createTestAccount();

     let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
     });

     let info = await transporter.sendMail({
        from: `"Flemming Flæskesværd" <kristianlaukryger@gmail.com>`,
        to: "kristianlaukryger@gmail.com",
        subject: "Yo yo yo whats puppin",
        text: "Hello world? Or something idk seems to be the standard around here",
        html: "<b>Hello there!</b>",
     });

     console.log("Message sent: %s", info.messageId);

     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main();