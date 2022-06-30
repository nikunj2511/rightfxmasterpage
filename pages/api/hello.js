// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY)
export default function handler(req, res) {
  console.log('raza');
  if (req.method === 'POST') {
    const body = JSON.parse(req.body);
    console.log(body);
    if(req.body.formName == 'contact-us'){
      // const message = `
      // NAME:${}
      // `;
      console.log(req.body);
    }
}
  res.status(200).json({ name: 'John Doe' })
}
