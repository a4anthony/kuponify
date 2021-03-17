import asyncHandler from "express-async-handler";
//We're using the express framework and the mailgun-js wrapper
import express from "express";
import Mailgun from "mailgun-js";
import path from "path";

//init express
var app = express();

//Your api key, from Mailgun’s Control Panel
var api_key = "3febde668a3561016067297e644eea56-0a4b0c40-3084b0a2";

//Your domain, from the Mailgun Control Panel
var domain = "sandbox2f1f275c5a8e46bab9d4505eaaa6c567.mailgun.org";

//Your sending email address
var from_who = "your@email.com";

//Tell express to fetch files from the /js directory
// const __dirname = path.resolve();
// app.use(express.static(__dirname + "/js"));
// //We're using the Jade templating language because it's fast and neat
// app.set("view engine", "jade");

const home = asyncHandler(async (req, res) => {
  //render the index.jade file - input forms for humans
  res.render("index", function (err, html) {
    if (err) {
      // log any error to the console for debug
      console.log(err);
    } else {
      //no error, so send the html to the browser
      res.send(html);
    }
  });
});

const submit = asyncHandler(async (req, res) => {
  //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var data = {
    //Specify email data
    from: from_who,
    //The email to contact
    to: req.params.mail,
    //Subject and text data
    subject: "Hello from Mailgun",
    template: "email_verify",
    // html:
    //   'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' +
    //   req.params.mail +
    //   '">Click here to add your email address to a mailing list</a>',
  };

  // mailgun.get(
  //   `/domains/${domain}/templates/email_verify`,
  //   function (error, body) {
  //     console.log(error);
  //     console.log(body);
  //   }
  // );
  // res.render("submitted", { email: req.params.mail });

  //Invokes the method to send emails given the above data with the helper library
  mailgun.messages().send(data, function (err, body) {
    //If there is an error, render the error page
    if (err) {
      res.render("error", { error: err });
      console.log("got an error: ", err);
    }
    //Else we can greet    and leave
    else {
      //Here "submitted.jade" is the view file for this landing page
      //We pass the variable "email" from the url parameter in an object rendered by Jade
      res.render("submitted", { email: req.params.mail });
      console.log(body);
    }
  });
});

const validate = asyncHandler(async (req, res) => {
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var members = [
    {
      address: req.params.mail,
    },
  ];
  //For the sake of this tutorial you need to create a mailing list on Mailgun.com/cp/lists and put its address below
  mailgun
    .lists("NAME@MAILINGLIST.COM")
    .members()
    .add({ members: members, subscribed: true }, function (err, body) {
      console.log(body);
      if (err) {
        res.send("Error - check console");
      } else {
        res.send("Added to mailing list");
      }
    });
});

const invoice = asyncHandler(async (req, res) => {
  //Which file to send? I made an empty invoice.txt file in the root directory
  //We required the path module here..to find the full path to attach the file!
  var path = require("path");
  var fp = path.join(__dirname, "invoice.txt");
  //Settings
  var mailgun = new Mailgun({ apiKey: api_key, domain: domain });

  var data = {
    from: from_who,
    to: req.params.mail,
    subject: "An invoice from your friendly hackers",
    text:
      "A fake invoice should be attached, it is just an empty text file after all",
    attachment: fp,
  };

  //Sending the email with attachment
  mailgun.messages().send(data, function (error, body) {
    if (error) {
      res.render("error", { error: error });
    } else {
      res.send("Attachment is on its way");
      console.log("attachment sent", fp);
    }
  });
});

export { home, submit, validate, invoice };
