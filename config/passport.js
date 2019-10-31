const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt-nodejs');
// const db = require('../models/');

module.exports = function(passport) {
  // // Serialize the user for the session
  // passport.serializeUser((user, done) => {
  //   done(null, user.id);
  // });
  //
  // // Deserialize the user for the session
  // passport.deserializeUser((id, done) => {
  //   db.Candidate
  //     .findById(id)
  //     .then((user, err) => {
  //       if (err) return done(err);
  //       done(err, user);
  //     });
  // });
  //
  // passport.use('local-login-candidate', new LocalStrategy({
  //     passReqToCallback: true
  //   },
  //   function(req, username, password, done) {
  //     db.Candidate
  //       .findOne({
  //         where: {
  //           username: username
  //         }
  //       })
  //       .then((user, err) => {
  //         if (err) { return done(err) }
  //         if (!user) { return done(null, false, { message: "Incorrect username."}) }
  //         if (!bcrypt.compareSync(req.body.password, user.dataValues.password)) { return done(null, false, { message: 'Incorrect password.'}) }
  //         return done(null, user);
  //       });
  //   }
  // ));
  //
  // passport.use('local-signup-candidate', new LocalStrategy({
  //     passReqToCallback: true
  //   },
  //   function(req, username, password, done) {
  //     db.Candidate
  //       .findOne({
  //         where: {
  //           'username' : username
  //         }
  //       })
  //       .then((result) => {
  //         if (result) {
  //           return done(null, false, {message: 'That user name is already taken.'});
  //         } else {
  //           let candidate = {
  //             username: username,
  //             password: bcrypt.hashSync(password, bcrypt.genSaltSync(password.length), null)
  //           }
  //           db.Candidate
  //             .create(candidate)
  //             .then(user => done(null, user))
  //             .catch(err => done(err));
  //         }
  //       })
  //       .catch(err => console.log(err));
  //   }
  // ));
};
