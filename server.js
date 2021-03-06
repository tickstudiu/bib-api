const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true});

const connection = mongoose.connection;
autoIncrement.initialize(connection);
connection.once('open', () => {
    console.log('mongodb database connection established successfully');
});

const bibsRouter = require('./routes/bibs');
const bibsDataRouter = require('./routes/bibsData');

app.use('/bibs', bibsRouter);
app.use('/bibsData', bibsDataRouter);

app.listen(port, () => {
    console.log('server is running on port', port)
});