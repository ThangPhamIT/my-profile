var express         = require('express');
// create our route object
var route = express.Router();
//export our router
module.exports = route;

// controllers
var controller = require('./controllers/index');

// route
route.get('/', controller.home.index);
route.post('/', controller.home.sendEmailToMe);