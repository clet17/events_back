import User from "../models/User.js"



const checkAdmin = async (req, res, next) => {
    const {id} = req.user
    const {role} = req.user

    try{
        // const user = await User.findById(id)
        if (role != 'admin'){
            return res.status(403).json('Accès refusé')
        }
    }
    catch(err)
    {
        console.log(err)
    }
    next()
}

export default checkAdmin