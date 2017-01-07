"use strict";
var passport = require('passport');
var Authentication = (function () {
    function Authentication() {
        var _this = this;
        // Receber email + password inseridos pelo Player na pag. LOGIN
        this.login = function (request, response, next) {
            var email = request.email;
            var password = request.password;
            //let token = request.token;
            //response.json(player);
            return next();
        };
        this.logout = function (request, response, next) {
            request.logOut();
            response.json({ msg: 'Logout' });
            return next();
        };
        this.googleAuth = function () {
            console.log('google auth srv');
            //passport.authenticate('google', { scope: ['profile'] })
        };
        this.googleAuthCb = function () {
            passport.authenticate('google', { failureRedirect: '/login' }),
                function (req, res) {
                    // Successful authentication, redirect home.
                    res.redirect('/lobby');
                };
        };
        this.fbAuth = function () {
            passport.authenticate('facebook');
        };
        this.fbAuthCb = function () {
            passport.authenticate('facebook', { failureRedirect: '/login' }),
                function (req, res) {
                    // Successful authentication, redirect home.
                    res.redirect('/lobby');
                };
        };
        this.init = function (server, settings) {
            server.post(settings.prefix + 'login', _this.login);
            //server.post(settings.prefix + 'login', settings.security.passport.authenticate('local', {'session':false}), this.login);
            server.post(settings.prefix + 'logout', settings.security.authorize, _this.logout);
            server.get('/auth/google', _this.googleAuth);
            server.get('/auth/google/callback', _this.googleAuthCb);
            server.get('/auth/facebook', _this.fbAuth);
            server.get('/auth/facebook/callback', _this.fbAuthCb);
            console.log("Authentication routes registered");
        };
    }
    return Authentication;
}());
exports.Authentication = Authentication;
