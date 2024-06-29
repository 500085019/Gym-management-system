const express = require('express');
const router = express.Router();
const { getClasses, createClass } = require('../controller/classController.js');

router.get('/', getClasses);
router.post('/', createClass);

module.exports = router;

