const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bibDataSchema = new Schema({
    bib_id: {type: Number, required: true},
    tag: {type: Number, required: true},
    time: { type: Date, required: true},
});

const BibData = mongoose.model('BibData', bibDataSchema);
module.exports = BibData;