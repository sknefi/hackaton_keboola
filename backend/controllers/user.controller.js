const express = require('express');
const router = express.Router();
const verifyToken = require('../services/verifyJwt');
const userDao = require('../dao/user.dao');	

router.get('/mock', verifyToken, userDao.mockUsers);
router.get('/list', verifyToken, userDao.listUsers);
router.get('/:id', verifyToken, userDao.getUser);
router.put('/:id', verifyToken, userDao.updateUser);
router.delete('/:id', verifyToken, userDao.deleteUser);

module.exports = router;