const express = require('express');
const indexRouter = require('./routes/index');
const jobsRouter = require('./routes/jobs');

const app = express();

app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use ('/jobs', jobsRouter);
app.listen(3000, function () {
    console.log('Listening on port Andre 3000');
});