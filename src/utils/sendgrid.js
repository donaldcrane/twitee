import sendMail from "@sendgrid/mail";
import config from "../config";

sendMail.setApiKey(config.SENDGRID_API_KEY);
const msg = {
  from: `Twitee <${config.SENDGRID_EMAIL}>`,
  mail_settings: {
    sandbox_mode: {
      enable: false,
    },
  },
};

export default class {
  static sandboxMode() {
    msg.mail_settings.sandbox_mode.enable = true;
  }

  static async onBoardMessage(email, username) {
    msg.to = email;
    msg.subject = "Welcome";
    msg.html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300;1,400&display=swap"
          rel="stylesheet"
        />
        <title>Welcome!!!</title>
      </head>
      <body style="margin: 0; background:#fdeee1; padding: 0 5px; font-family: "Open Sans", sans-serif;">
        <section style="padding:40px;height:100vh;position:relative">
            <div style="line-height: 1.2;background:#fff;border-radius: 5px;position:absolute;left:0;top:5%;width:100%;">
                <p style="margin: 10px;">Dear <strong>${username}</strong>,</p>
                <h3 style="text-align:center;color:#1B0E41">Thank you for registering, your account has been created successfully.</h3>    
             </div>
            </div>
        </section>
      </body>
    </html>`;
    try {
      await sendMail.send(msg);
      console.log("email sent");
    } catch (err) {
      return err;
    }
  }
}
