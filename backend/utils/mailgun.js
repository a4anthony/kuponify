import Mailgun from "mailgun-js";

const mail = {
  emailVerification(toEmail, token) {
    const data = {
      //Specify email data
      from: "noreply@kuponify.com",
      //The email to contact
      to: "anthonyakrodev@gmail.com",
      //Subject and text data
      subject: "Verify your email address",
      html: `Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! 
            <a href='${process.env.APP_URL}/email-verification?email=${toEmail}&token=${token}'>
                Click here to add your email address to a mailing list
            </a>`,
    };
    const mailgun = new Mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
    mailgun.messages().send(data, function (err, body) {
      if (err) {
        console.log("got an error: ", err);
      } else {
        console.log(body);
      }
    });
  },
  passwordReset(toEmail, token) {
    console.log("here");
    const data = {
      //Specify email data
      from: "noreply@kuponify.com",
      //The email to contact
      to: "anthonyakrodev@gmail.com",
      //Subject and text data
      subject: "Password Reset",
      html: `Follow the link below to reset your password. Link expires in 30mins! 
            <a href='${process.env.APP_URL}/password-reset?email=${toEmail}&token=${token}'>
                Click here to add your email address to a mailing list
            </a>`,
    };
    const mailgun = new Mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    });
    mailgun.messages().send(data, function (err, body) {
      if (err) {
        console.log("got an error: ", err);
      } else {
        console.log("body below");
        console.log(body);
      }
    });
  },
};
export default mail;
