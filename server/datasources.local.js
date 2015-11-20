require('dotenv').load();
var mailGunAPIKey = process.env.MAILGUN_API_KEY;
var mailGunDomain = process.env.MAILGUN_DOMAIN;
module.exports = {
    email: {
        name: "mail",
        connector: "mail",
        transports: [
        {
            type: "Mailgun",
            auth: {
                api_key: mailGunAPIKey,
                domain: mailGunDomain
            }
        }
        ]
    }
};
