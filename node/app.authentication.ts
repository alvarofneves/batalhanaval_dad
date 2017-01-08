import { HandlerSettings }                 from './handler.settings';
import { databaseConnection as database }  from './app.database';
import { Player }                          from '../angular/app/_shared';

const mongodb = require('mongodb');
const passport = require('passport');
const sha1 = require('sha1');

export class Authentication{

    private handleError = (err: string, response: any, next: any) => {
        response.send(500, err);
        next();
    }
    private returnPlayer = (id:string, email:string, response: any, next: any) => {
        database.db.collection('players')
            .findOne({
                _id: id,
                email : email
            })
            .then(game => {
                if (game === null) {
                    response.send(404, 'Game not found');
                } else {
                    response.json(game);
                }
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }
    // Receber email + password inseridos pelo Player na pag. LOGIN
    public login = (request: any, response: any, next: any) => {

        let user = JSON.parse(request.body);
        user.password = sha1(user.password);
        user.logged=true;

        database.db.collection('players')
        .findOne({
            email : user.email,
            password : user.password
        }).then(result => {
                if (user === null) {
                    response.send(404, 'No user not found');
                    
                } else {

                    response.json(result).redirect('/lobby');
                }
                console.log(user.id);
                this.returnPlayer(user.id, user.email, response, next);
            })
        .catch(err => this.handleError(err, response, next));
        
        
        
        //let password = JSON.parse(request.body).passport;
        //let token = request.token;
        //response.json(player);
    }
    
   

    public logout = (request: any, response: any, next: any) => {
        
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