const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/brand.controller');
const BrandService = require('../services/brand.service');
const controller = new BrandController(new BrandService());

router.get('/', controller.brandsGet.bind(controller));

module.exports = router;

