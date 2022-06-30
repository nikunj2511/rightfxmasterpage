// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY)
export default function handler(req, res) {
  console.log(req.body);
  if (req.method === 'POST') {
    // const body = JSON.parse(req.body);
    // console.log(body);
    if(req.body.formName == 'contact-us'){
      const message = `
      NAME:${req.body.name}\r\n
      EMAIL:${req.body.email}\r\n
      MESSAGE:${req.body.message}\r\n
      `;
      const data = {
        to:'no-reply@rightfx.com',
        from:req.body.email,
        subject:req.body.message,
        text:message,
        html:message.replace(/\r\r/g,'<br>'),
      }
      console.log(req.body);
      sgMail.send(data).then(() => {}, error => {
        console.error(error);
        if (error.response) {
          console.error(error.response.body)
        }
      });;
    }
}
  res.status(200).json({ name: 'John Doe' })
}
