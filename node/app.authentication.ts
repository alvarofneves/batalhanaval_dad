import { HandlerSettings } from './handler.settings';
const passport = require('passport');

export class Authentication{
    // Receber email + password inseridos pelo Player na pag. LOGIN
    public login = (request: any, response: any, next: any) => {
        let email = request.email;
        let password = request.password;

        //response.json(player);
        return next();
    }

    public logout = (request: any, response: any, next: any) => {
        request.logOut();
        response.json({msg: 'Logout'});
        return next();
    }  

    public googleAuth = () => {
        console.log('google auth srv');
        //passport.authenticate('google', { scope: ['profile'] })
    }  

    public googleAuthCb = () => {
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/lobby');
        }
    } 

    public fbAuth = () => {
        passport.authenticate('facebook')
    }  

    public fbAuthCb = () => {
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/lobby');
        }
    } 

    public init = (server: any, settings: HandlerSettings) => {
        server.post(settings.prefix + 'login', this.login);
        //server.post(settings.prefix + 'login', settings.security.passport.authenticate('local', {'session':false}), this.login);
        server.post(settings.prefix + 'logout', settings.security.authorize, this.logout);
        
        server.get('/auth/google', this.googleAuth);
        server.get('/auth/google/callback', this.googleAuthCb);
        server.get('/auth/facebook', this.fbAuth);
        server.get('/auth/facebook/callback', this.fbAuthCb);
        console.log("Authentication routes registered");
    }  
} 