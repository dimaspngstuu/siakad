const express = require('express');
const RouteDosen = express.Router();
const dosenController = require('../controller/dosenController')

RouteDosen.post('/',dosenController.create)
RouteDosen.get('/get',dosenController.getAll)
RouteDosen.get('/get/:id',dosenController.getById)
RouteDosen.put('/update/:id',dosenController.updateById)
RouteDosen.delete('/delete/:id',dosenController.delete)

module.exports = RouteDosen