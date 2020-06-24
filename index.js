const express = require('express');
const actions = require('./actions');
const cors = require('cors');
const bodyParser = require('body-parser');
const { snapmaster } = require('snapmaster-actions');

const app = express();

// enable CORS
app.use(cors());

// enable request body parsing middleware
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({
  extended: true
}));

// use the snapmaster middleware for all requests
app.use(snapmaster);

app.use('/send', actions.send);

app.use('/hello', (req, res) => { res.status(200).send('hello'); });
exports.actions = app;

const PORT = 5555;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
