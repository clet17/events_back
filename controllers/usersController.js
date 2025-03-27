import User from "../models/User.js";


export const getUserProfile = async (req, res) => {
    const {id} = req.user
    try{
        const userById = await User.findById(id).select('-password')
        if(!userById){
            return res.status(404).json('User not found')
        }
        return res.status(200).json(userById)
    }
    catch(err)
    {
        return res.status(500).json('Internall serv error')
    }
}