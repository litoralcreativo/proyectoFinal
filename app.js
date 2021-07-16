const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const session = require('express-session');
const {verifyUser, verifyAdmin} = require('./middlewares/auth');

dotenv.config();
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const usersProductsRouter = require('./routes/users/productos');
const usersCartRouter = require('./routes/users/cart');
const registroRouter = require('./routes/registro');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');
const adminIndexRouter = require('./routes/admin/index');
const adminIngredientesRouter = require('./routes/admin/ingredientes');
const adminUsersRouter = require('./routes/admin/users');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'passwordSecretoParaMiProyectoFinalDePWI',
  cookie: {maxAge: null},
  resave: true,
  saveUninitialized: false
}))

app.use('/', indexRouter);
app.use('/users', verifyUser, usersRouter);
//app.use('/users', usersRouter);
app.use('/users/productos', usersProductsRouter);
app.use('/users/cart', usersCartRouter);
app.use('/registro', registroRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/admin', verifyAdmin, adminIndexRouter);
//app.use('/admin', adminIndexRouter);
app.use('/admin/ingredientes', adminIngredientesRouter);
app.use('/admin/users', adminUsersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('notFound')
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
