'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contentSchema = require('./contentModel');

var questionSchema = new Schema({
    leftChoice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contents'
    },
    rightChoice: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contents'
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Questions', questionSchema);

