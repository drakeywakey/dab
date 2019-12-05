const db = require('../db');
const makeBrandsDb = require('./brands-db');

module.exports = {
    brandsDb: makeBrandsDb(db)
}