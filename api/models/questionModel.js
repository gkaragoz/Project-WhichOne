'use strict';

var mongoose = require('mongoose');
var contentSchema = require('./contentModel');
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    leftChoice: {
        content: contentSchema,
        votes: {
            type: Number,
            default: 0
        },
        required: true
    },
    rightChoice: {
        content: contentSchema,
        votes: {
            type: Number,
            default: 0,
            required: true
        }
    },
    text: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Questions', questionSchema);