import User from "../models/User.js";


export const getUserProfile = async (req, res) => {
    const {id} = req.user //depuis le middlewaire voir rooute
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

export const getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        if(!users){
            return res.status(404).json('User not found')
        }
        return res.status(200).json(users)
    }
    catch(err)
    {
        return res.status(500).json('Internall serv error')
    }
}


export const getUserById = async (req, res) => {
    // console.log('te')
    const {id} = req.params
    try{
        const userById = await User.findById(id)
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