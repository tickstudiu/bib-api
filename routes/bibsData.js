const router = require('express').Router();
let BibData = require('../models/bibData.model');

router.route('/').get((req, res) => {
    BibData.find()
        .then(bibsData => res.json(bibsData))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    BibData.findById(req.params.id)
        .then(bibData => res.json(bibData))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const bib_id = Number(req.body.bib_id);
    const tag = req.body.tag;
    const time = Date.now();

    const newBibData = new BibData({
        bib_id,
        tag,
        time
    });

    newBibData.save()
        .then(() => res.json('Bib data added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    BibData.findByIdAndDelete(req.params.id)
        .then(() => res.json('Bib data deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;