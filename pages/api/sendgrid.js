import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'jaspervermeulen@icloud.com', // Your email where you'll receive emails
      from: 'jaspervermeulen@icloud.com', // your website email address here
      subject: `Contact`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Demystifying Email Design</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </head>
    </html>
    <table style="font-family: Arial, sans-serif, 'Open Sans'; max-width:600px" width="100%" border="0" align="center" cellspacing="0" cellpadding="0">
      <tr>
        <td colspan="2">
          <div style="margin: 0px; padding: 0px; padding-top: 14px; margin-bottom: 16px">
            <p style="margin: 0px; padding: 0px; padding-top: 5px; padding-bottom: 5px; font-size:13px">(Dit berichtje is verstuurd via de website)
            <hr />
          </div>
        </td>
      </tr>
      <tr>
        <td style="margin: 0px; padding: 0px">
          <p style="margin: 0px; padding: 0px; padding-bottom: 4px; font-size:13px; text-transform: uppercase; font-weight: 900;opacity: 0.7">Naam:</p>
          <p style="border: solid; margin-top: 2px; margin-right: 12px; border-color: #539AD160; border-radius: 4px;
; margin: 0px; padding: 5px; font-size:15px">${req.body.name}</p>
          </td>
        <td style="margin: 0px; padding: 0px; padding-left: 6px">
          <p style="margin: 0px; padding: 0px; padding-bottom: 4px; font-size:13px; text-transform: uppercase; font-weight: 900;opacity: 0.7">Email:</p>
          <p style="border: solid; margin-top: 2px; margin-right: 12px; border-color: #539AD160; border-radius: 4px;
; margin: 0px; padding: 5px; font-size:15px">${req.body.email}</p>
        </td>
      </tr>
      <tr>
        <td colspan="2" style="margin: 0px; padding: 0px">
          <div style="padding-top: 16px">
            <p style="margin: 0px; padding: 0px; padding-bottom: 4px; font-size:13px; text-transform: uppercase; font-weight: 900;opacity: 0.7">Bericht:</p>
            <p style="border: solid; margin-top: 2px; margin-right: 12px; border-color: #539AD160; border-radius: 4px;
; margin: 0px; padding: 5px; font-size:15px">${req.body.message}</p>
          </div>
        </td>
      </tr>
    </table>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
