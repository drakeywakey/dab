const makeListBrands = require('./list-brands');
const { brandsDb } = require('../data-access');

const listBrands = makeListBrands(brandsDb)

module.exports = {
    listBrands
}