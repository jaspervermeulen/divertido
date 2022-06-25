import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID);

async function sendEmail(req, res) {
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: 'jaspervermeulen@icloud.com', // Your email where you'll receive emails
      from: 'jaspervermeulen@icloud.com', // your website email address here
      subject: `Registratie`,
      html: `<p>Naam kind: ${`${req.body.firstName} ${req.body.lastName}`}</p>
            <p>Geboortedatum: ${req.body.birthDate}</p>       
            <p>Leerjaar: ${req.body.grade}</p>
             <p>Geslacht: ${req.body.gender}</p>
            <p>Naam ouder: ${`${req.body.parentFirstName} ${req.body.parentLastName}`}</p>``
            <p>Mail ouder: ${req.body.parentMail}</p>
             <p>Gsm ouder: ${req.body.parentPhone}</p>
              <p>Adres ouder: ${req.body.parentAdres}</p>
               <p>Gekozen kampen: ${req.body.userCamps}</p>
                <p>Opmerkingen: ${req.body.extraNotes}</p>
                 <p>gdpr foto's: ${req.body.gdprImages}</p>
                  <p>gdpr data: ${req.body.gdprData}</p>
            `,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
