const { listBrands } = require('../use-cases');
const makeGetBrands = require('./get-brands');

const getBrands = makeGetBrands(listBrands);

module.exports = {
    getBrands
}