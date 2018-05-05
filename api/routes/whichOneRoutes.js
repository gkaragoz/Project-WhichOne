'use strict';

var content = require('./contentRoutes'),
    question = require('./questionRoutes')

module.exports = function (app) {
    content(app);
    question(app);
    
    app.use(function (req, res) {
        res.status(404).send({ url: req.originalUrl + ' not found' })
    });
};