const express = require('express');
const { getBrands } = require('./controllers');
const { port } = require('./config');
const makeCallback = require('./express-callback');

const app = express();

//app.use('/brands', brandRouter);
app.use('/brands', makeCallback(getBrands));

app.get('/divisions', async (req, res) => {
    let divisions = await getDivisions(client);
    res.send(divisions.rows);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});