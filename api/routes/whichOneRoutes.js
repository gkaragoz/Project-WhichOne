'use strict';

module.exports = function (app) {
    var content = require('../controllers/contentController');

    // whichOne Routes
    app.route('/contents')
        .get(content.list_all_contents)
        .post(content.create_a_content);


    app.route('/contents/:contentId')
        .get(content.read_a_content)
        .put(content.update_a_content)
        .delete(content.delete_a_content);
};
