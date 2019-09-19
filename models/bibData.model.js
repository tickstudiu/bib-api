const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const Schema = mongoose.Schema;

const bibDataSchema = new Schema({
    bib_id: {type: Number, required: true},
    tag: {type: Number, required: true},
    time: { type: Date, required: true},
});

bibDataSchema.plugin(autoIncrement.plugin, 'BibData');
const BibData = mongoose.model('BibData', bibDataSchema);
module.exports = BibData;