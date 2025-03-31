const express = require('express');
const router = express.Router();
const userServices = require('../services/user.services');

router.get('/mock', userServices.mockUsers);
router.get('/', userServices.getUser);
router.post('/', userServices.createUser);
router.put('/:id', userServices.updateUser);
router.delete('/:id', userServices.deleteUser);
router.get('/list', userServices.listUsers);

module.exports = router;