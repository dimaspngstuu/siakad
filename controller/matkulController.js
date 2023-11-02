const {MataKuliah} = require('../models')
const matkulController = {}
/*
    this is auto generate example, you can continue 

*/
matkulController.index = async(req,res) => {
    res.json({
        message : "Hello matkulController"
    })
}

matkulController.create = async (req,res) => {
    const {kode_matkul, nama, sks} = req.body

    try {
        const createMatkul  = await MataKuliah.create({
            kode_matkul: kode_matkul,
            nama:nama,
            sks: sks
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

matkulController.getAll = async (req,res) => {

    try {
        const getAllMataKuliah  = await MataKuliah.findAll({
            order: [["createdAt","DESC"]]
        })

        return res.status(200).json({
            data: getAllMataKuliah
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}


matkulController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getMataKuliahById  = await MataKuliah.findOne({
            where:{
                id:id
            }
        })

        return res.status(200).json({
            data: getMataKuliahById
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}

matkulController.updateById = async (req,res) => {
    const {id} = req.params
    const {kode_matkul, nama , sks} = req.body

    try {
        const getMahasiswaById = await MataKuliah.findOne({
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
            kode_matkul: kode_matkul,
            nama: nama,
            sks: sks
        }
        const updateMatakuliah = await MataKuliah.update(updateData,{
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

matkulController.delete = async (req,res) => {
    const {id} = req.params;

    try {
        const deleteMataKuliahById = await MataKuliah.destroy({
            where : {
                id: id
            }
        })

        if(deleteMataKuliahById === null){
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

module.exports = matkulController

