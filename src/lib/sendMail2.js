import mailgun from "mailgun-js";

const API_KEY = "08619d9bd3c116f284fb909ff4153ce9-18e06deb-4071df7c";
const DOMAIN = "chislonandpartners.co.uk";
const HOST = "api.eu.mailgun.net";

const mg = mailgun({ apiKey: API_KEY, domain: DOMAIN, host: HOST });

const sendEmail2 = (data) =>
  new Promise((resolve, reject) => {
    mg.messages().send(data, function (error, body) {
      if (error) {
        return reject(error);
      }
      return resolve(body);
    });
  });

export default sendEmail2;
