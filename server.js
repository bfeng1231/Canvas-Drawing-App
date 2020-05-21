const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');

const Pictures = require('./routes/api/pictures');

const app = express();

app.use(express.json());
//app.use(bodyParser.json());

const db = require('./config').mongoURI;

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api/pictures', Pictures)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port', port))