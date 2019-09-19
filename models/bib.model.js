const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const bibSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    checkpoint: {type: Number, required: true},
    distance: {type: Number, required: true},
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
});

bibSchema.plugin(autoIncrement.plugin, 'Bib');
const Bib = mongoose.model('Bib', bibSchema);
module.exports = Bib;