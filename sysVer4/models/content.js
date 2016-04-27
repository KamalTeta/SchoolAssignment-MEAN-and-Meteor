// /models/content.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var contentSchema = mongoose.Schema({

    local            : {
        title        : String,
        content     : String,
        author     : String
    }


});

// methods ======================

// create the model for users and expose it to our app
module.exports = mongoose.model('Content', contentSchema);