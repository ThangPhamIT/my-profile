var express         = require('express');
var bodyParser      = require('body-parser');
var expressLayouts  = require('express-ejs-layouts');
var nodemailer      = require('nodemailer');

module.exports = function (app) {
    // use ejs and express layouts
    //middleware
    app.set('view engine', 'ejs');
    app.use(expressLayouts);

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
}

