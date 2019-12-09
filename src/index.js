const express = require('express');
const app = express();
const brandRouter = require('./routes/brand');
const divsionsRouter = require('./routes/division');
const { port } = require('./config');

app.use('/brands', brandRouter);

app.use('/divisions', divsionsRouter);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});