'use strict';

var mongoose = require('mongoose'),
    Content = mongoose.model('Contents');

exports.list_all_contents = function (req, res) {
    Content.find({}, function (err, content) {
        if (err)
            res.send(err);
        res.json(content);
    });
};

exports.create_a_content = function (req, res) {
    var new_content = new Content(req.body);
    new_content.save(function (err, content) {
        if (err)
            res.send(err);
        res.json(content);
    });
};

exports.read_a_content = function (req, res) {
    Content.findById(req.params.contentId, function (err, content) {
        if (err)
            res.send(err);
        res.json(content);
    });
};

exports.update_a_content = function (req, res) {
    Content.findOneAndUpdate({ _id: req.params.contentId }, req.body, { new: true }, function (err, content) {
        if (err)
            res.send(err);
        res.json(content);
    });
};

exports.delete_a_content = function (req, res) {
    Content.remove({
        _id: req.params.contentId
    }, function (err, content) {
        if (err)
            res.send(err);
        res.json({ message: 'Content successfully deleted' });
    });
};