const dosenMatkulController = {}
const {Dosen, MataKuliah, DosenMatkul} = require('../models')

/*
    this is auto generate example, you can continue 

*/
dosenMatkulController.index = async(req,res) => {
    res.json({
        message : "Hello dosenMatkulController"
    })
}

dosenMatkulController.create = async(req,res) => {
    const {id_dosen, id_matkul} = req.body

    try {
        const getDosen = await Dosen.findOne({
            where:{
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })

        if( getDosen === null || getDosen === null){
            throw Error ("Data tidak di temukan")
        } else {
            const createDosenMatkul = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
            })

            return res.status(201).json({
                message: 'data berhasil ditambahkan'
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}


dosenMatkulController.getAll = async(req,res) => {
    const getDosenMatkul = await Dosen.findAll({
        include: [
            {
                model: MataKuliah
            }
        ]
    })

    res.status(201).json({
        data: getDosenMatkul
    })
}

dosenMatkulController.getById = async(req,res) => {
    const {id} = req.params
    const getDosenMatkulById = await Dosen.findOne({
        include: [
            {
                model: MataKuliah
            }
        ],
        where: {
            id:id
        }
    })

    res.status(201).json({
        data: getDosenMatkulById
    })
}

dosenMatkulController.update = async(req,res) => {
    const {id} = req.params
    const {id_dosen, id_matkul} = req.body

    try {
        const getDosen = await Dosen.findOne({
            where:{
                id: id_dosen
            }
        })

        const getMatkul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })

        if( getDosen === null || getDosen === null){
            throw Error ("Data tidak di temukan")
        } else {
            const createDosenMatkul = await DosenMatkul.create({
                id_dosen: getDosen.id,
                id_matkul: getMatkul.id
            },{
                where: {
                    id: id
                }
            })

            return res.status(201).json({
                message: 'data berhasil diubah'
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error
        })
    }
}

dosenMatkulController.delete = async(req,res) => {
    const {id} = req.params

    try {
        const deleteDosenMatkul = await DosenMatkul.destroy({
            where: {
                id: id
            }
        })

        return res.status(201).json({
            message: "data berhasil dihapus"
        })
    } catch (error) {
        return res.status(500).json({
            message: error
        })
    }
}

module.exports = dosenMatkulController

