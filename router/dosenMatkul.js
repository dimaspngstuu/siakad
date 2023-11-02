const express = require('express')
const routeDosenMatkul = express.Router()
const dosenMatkulController = require('../controller/dosenMatkulController')


routeDosenMatkul.post('/', dosenMatkulController.create)
routeDosenMatkul.get('/get', dosenMatkulController.getAll)


module.exports = routeDosenMatkul