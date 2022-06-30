// const sgMail = require('@sendgrid/mail');
// const { keys } = require('../common');

// const { emailCredentials } = keys;

// sgMail.setApiKey(emailCredentials.sendGridApiKey);


// class EmailService {
//   // eslint-disable-next-line class-methods-use-this
//   // async sendMail(to, subject, body, attachments, bcc = []) {
//   //   // return new Promise(function(resolve, reject){return resolve('dummy')})
//   //   const info = await transporter.sendMail({
//   //     from: `${emailCredentials.email}`,
//   //     to,
//   //     subject,
//   //     html: body,
//   //     attachments,
//   //     bcc,
//   //   });
//   //   return { messageId: info.messageId };
//   // }

//   async sendMail(to, subject, body, attachments = [], bcc = []) {
//     if (!attachments || attachments === null) {
//       attachments = [];
//     }
//     const msg = {
//       from: 'no-reply@rightfx.com',
//       to,
//       subject,
//       html: body,
//       attachments,
//       bcc
//     };
//     return sgMail
//       .send(msg)
//       .then((res) => {
//         console.log('res ', res);
//         return res;
//       })
//       .catch((error) => {
//         console.log('error ', JSON.stringify(error));
//         return { messageId: null, error };
//       });
//   }

//   sendMailCampaign(from = 'no-reply@rightfx.com', to, subject, body, attachments = [], bcc = [], replyTo = "") {

//     return new Promise(async (resolve, reject) => {

//       try {
//         if (!attachments || attachments === null) {
//           attachments = [];
//         }
//         const msg = {
//           from: from,
//           to,
//           subject,
//           html: body,
//           attachments,
//           bcc,
//         };
//           if(replyTo !== ""){
//             msg.reply_to = replyTo
//           }
//         let res = await sgMail.send(msg)
//         console.log("EMailll send res", `to: ${to} -- res: ${res}`);
//         resolve(res);
//       } catch (error) {
//        console.log(error);
//        reject({ messageId: null, error });
//       }
//     })

   
//   }
// }
// module.exports = new EmailService();