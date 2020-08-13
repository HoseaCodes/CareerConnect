/* eslint-disable prefer-arrow-callback */
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');
const feedRouter = require('./routes/feed');
const userRouter = require('./routes/user');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// eslint-disable-next-line spaced-comment
//may need to delete
// app.use(function(req, res) {
//   req.time = new Date().toLocaleTimeString()
//   req.date = new Date().toLocaleDateString()
// });

app.use(session({
  secret: 'SEIROCKS!',
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/', jobsRouter);
app.use('/', feedRouter);
app.use('/', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Listening on port Andre: ${port}`);
});
