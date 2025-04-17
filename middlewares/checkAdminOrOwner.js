import Service from "../models/Service.js"
import User from "../models/User.js"



const checkAdminOrOwner = async (req, res, next) => {
    const {id} = req.user
    const {role} = req.user
    const serviceID = req.params.id 


    try{
        const service = await Service.findById(serviceID)
        const user = await User.findById(id)
        console.log(service)
        // console.log(id)
        // console.log(service.userID.toString)

        const isOwner = service.userID.toString() === id
        const isAdmin = user.role === 'admin'

        if(isOwner || isAdmin){
            next()
        }
        else {
            return res.status(405).json('Accès refusé, vous devez être le créateur du service')
        }

    }
    catch(err)
    {
        console.log(err)
    }
    
}

export default checkAdminOrOwner