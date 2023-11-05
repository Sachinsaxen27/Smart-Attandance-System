const jwt=require('jsonwebtoken');
const jwt_Sign ="SachinSAXENA"
const fetchuser = async (req,res,next)=>{
    const token= req.header('auth-token')
    console.log(token)
    if(!token){
        return res.status(401).json({error:"Incorrect information"})
    }
    try {
        const datas=jwt.verify(token,jwt_Sign);
        req.user=datas.user.id
    next();
    } catch (error) {
        return res.status(401).json({error:error})   
    }
    }


module.exports = fetchuser;