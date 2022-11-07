import nodemailer from "nodemailer";


const user = {
    mail: 'kristiankryger99@gmail.com',
    password: 'thfhleyqgernpueb',
};

const mailText = {
    text: 'This is a mail that has been send to you automatically',
};

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: user.mail,
        password: user.password,
    }
});


export function sendMail(mailReciever) {
    return new Promise(async (resolve, reject) => {
        try {
            mail = await transporter.sendMail({
                from: `"Mail test" <${user.mail}>`,
                to: `${mailReciever.mail}`,
                subject: `Whats up ${mailReciever.name}`,
                text: mailText.text,
                html: `<b>${mailText.text}</b>`,
            });
            resolve(mail);
        } catch (err) {
            reject("Error code 1");
        }
    });
}