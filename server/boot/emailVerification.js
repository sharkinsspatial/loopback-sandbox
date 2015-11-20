var path = require('path');
module.exports = function(app) {
    var User = app.models.User;
    User.afterRemote('create', function(context, user, next) {
        console.log('After Remote Triggered');
        var options = {
            type: 'email',
            to: user.email,
            from: 'noreply@loopback.com',
            subject: 'Thanks for registering.',
            redirect: '/verified',
            template: path.resolve(__dirname, '../../node_modules/loopback/templates/verify.ejs')
        };

        user.verify(options, function(err, response, next) {
            console.log(err);
            if (err) {
                next(err);
                return;
            }
            console.log('> verification email sent:', response);
            context.res.render('response', {
                title: 'Signed up successfully',
                content: 'Please check your email and click on the verification link '
                + 'before logging in.',
                redirectTo: '/',
                redirectToLinkText: 'Log in'
            });
        });
    });
}
