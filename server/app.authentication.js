"use strict";
var app_database_1 = require("./app.database");
var mongodb = require('mongodb');
var passport = require('passport');
var sha1 = require('sha1');
var Authentication = (function () {
    function Authentication() {
        var _this = this;
        this.handleError = function (err, response, next) {
            response.send(500, err);
            next();
        };
        this.returnPlayer = function (id, response, next) {
            app_database_1.databaseConnection.db.collection('players')
                .findOne({
                _id: id
            })
                .then(function (player) {
                if (player === null) {
                    response.send(404, 'Player not found');
                }
                else {
                    response.json(player);
                }
                next();
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
        };
        this.getPlayer = function (request, response, next) {
            var id = new mongodb.ObjectID(request.params.id);
            _this.returnPlayer(id, response, next);
        };
        // Receber email + password inseridos pelo Player na pag. LOGIN
        this.login = function (request, response, next) {
            var user = JSON.parse(request.body);
            user.password = sha1(user.password);
            user.logged = true;
            //verifica se existe o email na bd e verifica a password na bd
            app_database_1.databaseConnection.db.collection('players')
                .findOne({
                email: user.email,
                password: user.password,
            })
                .then(function (player) {
                if (user != null) {
                    app_database_1.databaseConnection.db.collection('players').
                        findOne({
                        email: user.email,
                        _id: user.id
                    });
                    console.log(player._id);
                    response.json(player._id).redirect('/lobby');
                }
                else {
                    response.send(404, 'No user not found');
                }
                console.log(player);
            })
                .catch(function (err) { return _this.handleError(err, response, next); });
            //let password = JSON.parse(request.body).passport;
            //let token = request.token;
            //response.json(player);
        };
        this.logout = function (request, response, next) {
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
            server.get(settings.prefix + 'players/:id', _this.getPlayer);
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
