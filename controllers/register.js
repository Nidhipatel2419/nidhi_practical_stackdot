const register = require('../schemas/register')

const addUser = async (req,res,next)=>{
    try {
      const result=await  register.insertOne(req.body);
      console.log("result",result)
      res.send({data :result,status:true});
    } catch (error) {
        console.log("error at addUser",error)
    }
}

module.exports = {addUser};


