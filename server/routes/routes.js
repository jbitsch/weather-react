const express = require('express');
const router = express.Router();

router.use('/api/weather', require('./weather'));
router.use('*', require('./render'));

module.exports = router