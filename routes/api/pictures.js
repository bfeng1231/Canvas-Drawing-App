const express = require('express')
const router = express.Router();
const auth = require('../../middleware/auth')

const Picture = require('../../models/pictures');

router.get('/', (req, res) => {
  Picture.find()
    .sort({date: -1})
    .then(pictures => res.json(pictures))
});

router.post('/', auth, (req, res) => {
  const newPicture = new Picture({
    src: req.body.src
  });
  
  newPicture.save().then(picture => res.json(picture));
});

router.delete('/:id', auth, (req, res) => {
  Picture.findById(req.params.id)
    .then(picture => picture.remove().then(() => res.json({deleted: true})))
    .catch(err => res.status(404).json({deleted: false}))
});


module.exports = router;