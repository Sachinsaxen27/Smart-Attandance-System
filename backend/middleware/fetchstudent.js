const jwt=require('jsonwebtoken');
const jwt_Sign ="SachinSAXENA"

const fetchstudent = async (req,res,next)=>{
    const token= req.header('auth-token')
    console.log(token)
    if(!token){
        return res.status(401).json({error:"Incorrect information"})
    }
    try {
        const datas=jwt.verify(token,jwt_Sign);
        console.log(datas.student.id)
        req.user=datas.student.id
    next();
    } catch (error) {
        return res.status(401).json({error:"Incorrect"})   
    }
    }

module.exports =fetchstudent
