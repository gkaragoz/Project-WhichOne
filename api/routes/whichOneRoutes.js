'use strict';

var content = require('./contentRoutes'),
    question = require('./questionRoutes')

module.exports = function (app) {
    content(app);
    question(app);
};