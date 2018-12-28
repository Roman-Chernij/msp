const express = require('express');
const { urlencoded, json } = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config/config');

// imports pouters
const authRoutes = require('./pouters/auth');
const languageRoutes = require('./pouters/language');

const app = express();

app.use(require('morgan')('dev'));
app.use('/uploads', express.static('uploads'));
app.use(urlencoded({extended: true}));
app.use(json());
app.use(require('cors')());

mongoose.connect(config.MONGO_URI, {useNewUrlParser: true})
    .then(() => console.log('mongoDB started ...'))
    .catch(err => console.log(err));

app.use(passport.initialize());
require('./middleware/passport')(passport);
app.use('/api/auth', authRoutes);
app.use('/api/language', languageRoutes);

module.exports = app;