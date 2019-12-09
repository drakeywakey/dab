const express = require('express');
const router = express.Router();
const DivisionController = require('../controllers/division.controller');
const DivisionService = require('../services/division.service');
const controller = new DivisionController(new DivisionService());

router.get('/', controller.divisionsGet.bind(controller));

module.exports = router;