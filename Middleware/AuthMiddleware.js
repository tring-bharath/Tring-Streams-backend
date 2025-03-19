const jwt=require("jsonwebtoken");

const authMiddleware=async (req,res,next)=>
{
    const token =req.header("Authorization");
    
    try
    {
        console.log(token);
        const decoded=jwt.verify(token,process.env.SECRET_KEY);
        
        req.user=decoded.user;
        next();
    }
    catch(err)
    {
        res.status(400).send(err);
    }
}
module.exports=authMiddleware;