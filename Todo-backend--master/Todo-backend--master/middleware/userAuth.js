const jwt = require('jsonwebtoken');

const userAuth = (req, res, next)=>{
    const token = req.header('token') || req.cookies.token
    // console.log(token)
    try{

       
        if(!token){
            return res.status(401).json({
                message: "No entry without auth"
            })
        }
        
        const users = jwt.verify(token,"shhhhh");

        // console.log(users)

        req.user = {
            user_id:users.id
        }
        
        
    }
    catch(err){
        return res.json({message:"no",err})
    }
    next(); 
}

module.exports = userAuth;