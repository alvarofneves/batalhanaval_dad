const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const sha1 = require('sha1');

import { databaseConnection as database } from './app.database';

export class Security {
    public passport = passport;

    public initMiddleware = (server: any) => {
        server.use(passport.initialize());
    };

    public authorize = this.passport.authenticate('bearer', { session: false });
}

let validPassword = (player: any, password: any) => {
    return sha1(password) === player.passwordHash;
}

passport.use(new LocalStrategy((email, password, done) => {
    database.db.collection('players').findOne({
        email: email
    }).then(player => {
        if (player === null) {
            return done(null, false, {message: 'Incorrect credentials.'});
        }
        if (!validPassword(player, password)) {
            return done(null, false, {message: 'Incorrect credentials.'});
        }
        player.token = sha1(player.email + Date.now());
        database.db.collection('players')
            .updateOne({_id: player._id}, {$set: {token: player.token}})
            .then(r => r.modifiedCount !== 1 ? done(null, false) : done(null, player))
            .catch(err => done(err));
    }).catch(err => done(err));
}));

passport.use(new BearerStrategy((token, done) => {
    database.db.collection('players')
        .findOne({token: token})
        .then((user) => user ? done(null, user, {scope:'all'}) : done(null, false))
        .catch(err => done(err));
}));

passport.use(new GoogleStrategy({
    clientID: '553038485273-hnnd0ve2kiqe82e03ko8up3geaki2lhv.apps.googleusercontent.com',
    clientSecret: '0gOLOchvS6iNGxPWLXd_Df6L',
    callbackURL: "http://www.example.com/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
));

passport.use(new FacebookStrategy({
    clientID: '1846078752336154',
    clientSecret: 'c156ff0efe344fd3906ba3921501800d',
    callbackURL: "http://localhost:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ facebookId: profile.id }, function (err, user) {
        return cb(err, user);
    });
  }
));