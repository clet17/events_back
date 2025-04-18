import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

export const authMiddleware = async (req, res, next) => {
    // console.log('Middleware de vérif')
    // console.log(req.headers)
    const token = req.headers.authorization?.split(' ')[1]
    // console.log('JWT_SECRET utilisé:', JWT_SECRET)
    // console.log('Token reçu:', token)
    if (!token){
        return res.status(401).json('Accès refusé : pas de token')
    }
    try{
        const verify = jwt.verify(token, JWT_SECRET)
        if(!verify){
            return res.status(403).json('Accès refusé : mauvais token')
        }
        req.user = verify 
        console.log(req.user)
        next()
    }
    catch(err){
        console.log(err)
        return res.status(500).json('Internall serv error')
    }
}