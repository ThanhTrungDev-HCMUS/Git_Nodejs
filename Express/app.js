var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const admin = require('./src/modules/admin/admin.router');
const user  = require('./src/modules/user/user.router');
const userdetail = require('./src/modules/userdetail/userdetail.router');
const categories = require('./src/modules/categories/categories.router');
const product = require('./src/modules/product/products.router');
const productdetail = require('./src/modules/productdetail/productdetail.router');

// view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',[admin,user,categories,userdetail,product,productdetail]);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
