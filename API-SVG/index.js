require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const svg = require('./database/svg')

app.get('/getSvg/:nm_mun', svg.getSVG);
app.get('/getViewBox/:nm_mun',svg.getViewBox);

app.listen(process.env.PORT, () => { 
  console.log(`Server listening on port ${process.env.PORT}`); 
});