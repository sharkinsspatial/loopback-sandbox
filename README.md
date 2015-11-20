# loopback-sandbox

A repository for reproducing [LoopBack community issues][wiki-issues].

[wiki-issues]: https://github.com/strongloop/loopback/wiki/Reporting-issues

To reproduce https://github.com/strongloop/loopback/issues/1828

Run
````shell
$ npm install
````
Sign up for a free Mailgun account [here](https://mailgun.com/signup).

In the project root create a .env file to hold your MailGun api keys.

Add the following entries to your .env file.
````shell
MAILGUN_API_KEY=yourAPIKey
MAILGUN_DOMAIN=yourDomain
````
Run
````shell
node .
````
In the API Explorer in `User/User_create' attempt to create a simple new User
such as
````json
{
"email": "you@gmail.com",
"password": "somePassword"
}
````
You should receive the error
````shell
{ [Error: Sorry: template parameter is not supported yet. Check back soon!] statusCode: 400 }
````
due to the unnecessary options.template [property](https://github.com/strongloop/loopback/blob/master/common/models/user.js#L422).




