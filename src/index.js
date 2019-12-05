const express = require('express');
const app = express();

const getBrands = require('./services/brandService');
const getDivisions = require('./services/divisionService');

const postgresClient = require('./postgresClient')();
let client;
postgresClient.then(result => client = result);

const { port } = require('./config');

app.get('/brands', async (req, res) => {
    let brands = await getBrands(client);
    res.send(brands.rows);
});

app.get('/divisions', async (req, res) => {
    let divisions = await getDivisions(client);
    res.send(divisions.rows);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// comment somewhere