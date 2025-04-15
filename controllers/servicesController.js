import Service from "../models/Service.js";


export const getAllServices = async (req, res) => {
    try {
        const services = await Service.find()
        if(services.length < 1){
            return res.status(400).json('services introuvable')
        }
        console.log(services)
        return res.status(200).json(services)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error')
    }
}

export const getServicesById = async (req, res) => {
    const {id} = req.params

    try {
        const servicesById = await Service.findById().populate('userID', '-password')
        if(!servicesById){
            //retourne un message d'erreur
            return res.status(402).json('Service pas trouvé')
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error')
    }
}

export const createService = async (req, res) => {
    try {
        const newService = await Service.create(req.body)
        if(newService){
            return res.status(201).json('service crée')
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error', err)
    }
}