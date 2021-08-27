const mongoose = require('mongoose');

const statementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    statement: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
})

const Statement = mongoose.model('Statement', statementSchema);

module.exports = Statement;