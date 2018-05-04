'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var contentSchema = require('./contentModel');

var questionSchema = new Schema({
    leftChoice: {
        type: mongoose.Schema.ObjectId,
        ref: contentSchema,
        vote: {
            type: Number,
            default: 0
        },
    },
    rightChoice: {
        type: mongoose.Schema.ObjectId,
        ref: contentSchema,
        rightVote: {
            type: Number,
            default: 0
        }
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Questions', questionSchema);

