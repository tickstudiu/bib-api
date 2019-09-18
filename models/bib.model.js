const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bibSchema = new Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    description: {type: String},
    checkpoint: {type: Number, required: true},
    distance: {type: Number, required: true},
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

const Bib = mongoose.model('Bib', bibSchema);
module.exports = Bib;