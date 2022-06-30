const sgMail = require('@sendgrid/mail');
// sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY)
export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
    if (req.method === 'POST') {
        console.log(req.body);
    }
    // res.status(200).json({ name: 'John Doe' })
  }