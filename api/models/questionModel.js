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
    },
    leftVotes: {
        type: Number,
        default: 0
    },
    rightVotes: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Questions', questionSchema);

