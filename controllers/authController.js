import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const createUser = async (req, res) => {
    const {first_name, last_name, email, password} = req.body

    try{
        const emailVerification = await User.findOne({email : email}) //email : email = email
        if(emailVerification){
            return res.status(409).json('email déja utilisé')
        }

        const saltPassword = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, saltPassword)

        const newUser = await new User({
            first_name,
            last_name,
            email,
            password : hashedPassword,
            image: req.file ? 'public/images/' + req.file.filename : null
        })

        newUser.save()
        const token = await jwt.sign({ id: newUser._id, role: newUser.role }, JWT_SECRET)
        return res.status(201).json({message : `Welcome sur ce site ${first_name}`, token})
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error', err)
    }
}


export const loginUser = async (req, res) => {
    const {email, password} = req.body

    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(401).json('Email ou MDP invalide')
        }
        
        const comparePassword = await bcrypt.compare(password, user.password)
        if(!comparePassword){
            return res.status(401).json('Email ou MDP invalide')
        }

        // console.log('JWT_SECRET lors de la génération:', JWT_SECRET)
        const token = await jwt.sign({id : user._id, role: user.role}, JWT_SECRET)
        return res.status(200).json({message : 'Bienvenue', token})
    }
   
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error', err)
    }
}


