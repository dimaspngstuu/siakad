const {Dosen} = require('../models')
const dosenController = {}

/*
    this is auto generate example, you can continue 

*/
dosenController.index = async(req,res) => {
    res.json({
        message : "Hello dosenController"
    })
}

dosenController.create = async (req,res) => {
    const {nidn, nama, alamat} = req.body

    try {
        const createDosen  = await Dosen.create({
            nama: nama,
            nidn: nidn,
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

dosenController.getAll = async (req,res) => {

    try {
        const getAllDosen  = await Dosen.findAll({
            order: [["createdAt","DESC"]]
        })

        return res.status(200).json({
            data: getAllDosen
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}


dosenController.getById = async (req,res) => {
    const {id} = req.params
    try {
        const getDosenById  = await Dosen.findOne({
            where:{
                id:id
            }
        })

        return res.status(200).json({
            data: getDosenById
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
    
    
}

dosenController.updateById = async (req,res) => {
    const {id} = req.params
    const {nama, nidn , alamat} = req.body

    try {
        const getDosenById = await Dosen.findOne({
            where: {
                id:id
            }
        })

        if(getDosenById === null){
            res.status(404).json({
                message:'data tidak ada!'
            })
        }

        const updateData = {
            nama: nama,
            nidn: nidn,
            alamat: alamat
        }
        const updateDosen = await Dosen.update(updateData,{
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

dosenController.delete = async (req,res) => {
    const {id} = req.params;

    try {
        const deleteDosenById = await Dosen.destroy({
            where : {
                id: id
            }
        })

        if(id === null){
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



module.exports = dosenController

