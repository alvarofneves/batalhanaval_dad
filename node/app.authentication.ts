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
    private returnPlayer = (id:string, response: any, next: any) => {
        database.db.collection('players')
            .findOne({
                _id: id
            })
            .then((player) => {
                if (player === null) {
                    response.send(404, 'Player not found');
                } else {
                    response.json(player);
                }
                next();
            })
            .catch(err => this.handleError(err, response, next));
    }

    public getPlayer =  (request: any, response: any, next: any) => {
        const id = new mongodb.ObjectID(request.params.id);
        this.returnPlayer(id, response, next);
    }
    // Receber email + password inseridos pelo Player na pag. LOGIN
    public login = (request: any, response: any, next: any) => {

        let user = JSON.parse(request.body);
        user.password = sha1(user.password);
        user.logged=true;

        //verifica se existe o email na bd e verifica a password na bd
        //
        database.db.collection('players')
        .findOne({
            email : user.email,
            password : user.password,
            
        }).then(player => {
                if (user === null) {
                    response.send(404, 'No user not found');
                    
                } else {

                    response.json(user).redirect('/lobby');
                }
                console.log(player);
                
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
        server.get(settings.prefix + 'players/:id', this.getPlayer);
        server.get('/auth/google', this.googleAuth);
        server.get('/auth/google/callback', this.googleAuthCb);
        server.get('/auth/facebook', this.fbAuth);
        server.get('/auth/facebook/callback', this.fbAuthCb);
        console.log("Authentication routes registered");
    }  
} 