/* eslint-disable no-console */
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const cloudinary = require('cloudinary');
const formData = require('express-form-data');

const indexRouter = require('./routes/index');
const uploadRouter = require('./routes/common/imageUpload');
const usersRouter = require('./routes/user.route');
const profilesRouter = require('./routes/api/profile.route');

// Database config
const SecretKey = require('./configs/server.config');

mongoose
  .connect(SecretKey.mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err));

const app = express();

// Passport middleware
app.use(passport.initialize());
// Passport Config
require('./configs/passport')(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(formData.parse());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Config cloudinary
cloudinary.config(SecretKey.CLODINARY_CONFIG);

app.use('/', indexRouter);
app.use('/', uploadRouter);
app.use('/users', usersRouter);
app.use('/api/profile', profilesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
