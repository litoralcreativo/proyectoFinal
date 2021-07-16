const nodemailer = require('nodemailer');

// envio de mail tiene una demora, por lo que vamos a usar async await...
const send = async ({mail, asunto, cuerpo}) => {
    try {

        const transporter = nodemailer.createTransport({
            service: process.env.MAIL_SERVICE,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });
        const info = {
            from: '<no-reply>mealstrack<no-reply>',
            to: mail,
            subject: asunto,
            html: cuerpo,
        };
        const {messageId} = await transporter.sendMail(info);
        return messageId;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {send};