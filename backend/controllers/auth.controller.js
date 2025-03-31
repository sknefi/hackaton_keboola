const express = require('express');
const router = express.Router();

const { register, login } = require('../dao/auth.dao');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
