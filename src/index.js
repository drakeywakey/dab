const express = require('express');
const app = express();
const brandRouter = require('./routes/brand');
const { port } = require('./config');

app.use('/brands', brandRouter);

app.get('/divisions', async (req, res) => {
    let divisions = await getDivisions(client);
    res.send(divisions.rows);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});