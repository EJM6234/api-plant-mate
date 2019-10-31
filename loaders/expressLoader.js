const bodyParser = require("body-parser");
const passport = require("passport");
const passportConfig = require('../config/passport');
const flash = require("connect-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const sessionConfig = require("../config/session-config");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("../routes");

module.exports = async (app) => {
  try {
    console.log('Loading Express server...');
    app.use(cors());
    app.use(morgan('dev'));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    // Set up Express session
    app.use(session({
      secret: sessionConfig.secret,
      cookie: {
        maxAge: 86400000,
        secure: true
      },
      unset: 'destroy',
      saveUninitialized: false,
      resave: false,
    }));

    // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    passportConfig(passport);

    // Routes
    app.use('/api', routes);
  } catch (err) {
    console.error('Error loading Express: ', err);
    throw err;
  }

  return app;
};
