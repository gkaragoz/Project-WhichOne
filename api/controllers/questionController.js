'use strict';

var mongoose = require('mongoose'),
    Content = mongoose.model('Contents'),
    Question = mongoose.model('Questions');

exports.read_a_random_question = function (req, res) {
    Question.count({}, function(err, count) {
        if (err)
            console.log("Any document couldn't found!");

        var questionId = Math.floor(Math.random() * count);
        
        Question.findOne({})
            .skip(questionId)
            .populate('leftChoice')
            .populate('rightChoice')
            .exec(function (err, question) {
                if (err)
                    res.send(err);
    
                res.json(question);
            })
    })


}

exports.list_all_questions = function (req, res) {
    Question.find({})
        .populate('leftChoice')
        .populate('rightChoice')
        .exec(function (err, question) {
            if (err)
                res.send(err);

            res.json(question);
        })
};

exports.create_a_question = function (req, res) {
    var new_question = new Question(req.body);
    new_question.save(function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};

exports.read_a_question = function (req, res) {
    Question.findById(req.params.questionId)
        .populate('leftChoice')
        .populate('rightChoice')
        .exec(function(err, question) {
            if (err)
                res.send(err);
                
            res.json(question);
        })
};

exports.update_a_question = function (req, res) {
    Question.findOneAndUpdate({ _id: req.params.questionId }, req.body, { new: true }, function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};

exports.delete_a_question = function (req, res) {
    Question.remove({
        _id: req.params.questionId
    }, function (err, question) {
        if (err)
            res.send(err);
        res.json({ message: 'Question successfully deleted' });
    });
};