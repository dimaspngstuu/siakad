const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require('./mahasiswa');
const RouteDosen = require("./dosen");
const routeMatkul = require("./matakuliah");
const routeDosenMatkul = require('./dosenMatkul')
const route = express.Router()

route.get('/',exampleController.index)
route.use('/mahasiswa', routeMahasiswa)
route.use('/dosen',RouteDosen)
route.use('/matakuliah', routeMatkul)
route.use('/dosenMatkul', routeDosenMatkul)


module.exports = route