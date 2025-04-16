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
        const servicesById = await Service.findById(id).populate('userID', '-password')
        if(!servicesById){
            //retourne un message d'erreur
            return res.status(402).json('Service pas trouvé')
        }
        return res.status(200).json(servicesById)
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error')
    }
}

export const createService = async (req, res) => {
    const {title, description, price, category, address, awaitbility, userID} = req.body
    try {
        const newService = await Service.create({
            title,
            description,
            price,
            category,
            address,
            awaitbility,
            userID : req.user.id,
            image : 'public/images/' + req.file.filename
        })
        if(newService){
            return res.status(201).json({message : 'service crée', newService})
        }
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error', err)
    }
}