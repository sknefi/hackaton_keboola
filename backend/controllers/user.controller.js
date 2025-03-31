const express = require('express');
const router = express.Router();

const userDao = require('../dao/user.dao');	

router.get('/mock',  userDao.mockUsers);
router.get('/:id', userDao.getUser);
router.put('/:id', userDao.updateUser);
router.delete('/:id', userDao.deleteUser);
router.get('/list', userDao.listUsers);

module.exports = router;