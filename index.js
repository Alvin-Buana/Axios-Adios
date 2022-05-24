const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const base = require('./route/base');
// const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', base);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);