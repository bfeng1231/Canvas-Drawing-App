const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const db = require('./config').mongoURI;
//const db = config.get('mongoURI');

mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

app.use('/api/pictures', require('./routes/api/pictures'))
app.use('/api/user', require('./routes/api/user'))
app.use(serveStatic(__dirname + '/client/build'))

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port', port))