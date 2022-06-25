import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'jaspervermeulen@icloud.com', // Your email where you'll receive emails
      from: 'jaspervermeulen@icloud.com', // your website email address here
      subject: `Contact`,
      html: `<div>${req.body.message}${req.body.email}${req.body.name}/div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
