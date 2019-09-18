const router = require('express').Router();
let Bib = require('../models/bib.model');

router.route('/').get((req, res) => {
    Bib.find()
        .then(bibs => res.json(bibs))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Bib.findById(req.params.id)
        .then(bib => res.json(bib))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const id = Number(req.body.id);
    const title = req.body.title;
    const description = req.body.description;
    const checkpoint = Number(req.body.checkpoint);
    const distance = Number(req.body.distance);

    const newBib = new Bib({
        id,
        title,
        description,
        checkpoint,
        distance
    });

    newBib.save()
        .then(() => res.json('Bibs added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Bib.findByIdAndDelete(req.params.id)
        .then(() => res.json('Bib deleted!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;