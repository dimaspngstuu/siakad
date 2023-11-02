const { where } = require('sequelize')
const {Mahasiswa} = require('../models')
const mahasiswaController = {}


mahasiswaController.index = async(req,res) => {
    res.json({
        message : "Hello mahasiswaController"
    })
}


mahasiswaController.create = async (req,res) => {
    const {nim, nama, alamat} = req.body

    try {
        const createMahasiswa  = await Mahasiswa.create({
            nama: nama,
            nim: nim,
            alamat: alamat
        })

        return res.status(201).json({
            message: 'Data berhasil ditambahkan'
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}

mahasiswaController.getAll = async (req,res) => {

    try {
        const getAllMahasiswa  = await Mahasiswa.findAll({
            order: [["createdAt","DESC"]]
        })

        return res.status(200).json({
            data: getAllMahasiswa
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}


mahasiswaController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getMahasiswaById  = await Mahasiswa.findOne({
            where:{
                id:id
            }
        })

        return res.status(200).json({
            data: getMahasiswaById
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}

mahasiswaController.updateById = async (req,res) => {
    const {id} = req.params
    const {nama, nim , alamat} = req.body

    try {
        const getMahasiswaById = await Mahasiswa.findOne({
            where: {
                id:id
            }
        })

        if(getMahasiswaById === null){
            res.status(404).json({
                message:'data tidak ada!'
            })
        }

        const updateData = {
            nama: nama,
            nim: nim,
            alamat: alamat
        }
        const updateMahasiswa = await Mahasiswa.update(updateData,{
            where: {
                id: id
            }
        })

        res.status(201).json({
            message: "data berhasil di ubah",
            data: updateData
        })
    } catch (error) {
        
    }
}

mahasiswaController.delete = async (req,res) => {
    const {id} = req.params;

    try {
        const deleteMahasiswaById = await Mahasiswa.destroy({
            where : {
                id: id
            }
        })

        if(id > deleteMahasiswaById.length){
            res.status(404).json({
                message: 'data tidak di temukan'
            })
        }

        res.status(201).json({
            message: `data dengan id ${id} berhasil di hapus`
        })
    } catch (error) {
        res.json(500).json({
            message: error
        })
    }

    



}

module.exports = mahasiswaController

