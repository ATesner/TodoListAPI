'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: {
        type: String,
        required: 'Entrez un nom de tâche'
    },
    responsible: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    priority: {
        type: [{
            type: String,
            enum: ['low', 'medium', 'high']
        }],
        default: ['low']
    }
});

module.exports = mongoose.model('Tasks', TaskSchema);