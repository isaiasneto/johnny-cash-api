const express = require('express');
const path = require('path');
const logger = require('morgan');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));

app.use(routes);

module.exports = app;
