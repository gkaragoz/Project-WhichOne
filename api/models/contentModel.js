'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contentSchema = new Schema({
    name: {
        type: String,
        required: 'Name'
    },
    imageUrl: {
        type: String,
        required: 'Name'
    }
});

module.exports = mongoose.model('Contents', contentSchema);