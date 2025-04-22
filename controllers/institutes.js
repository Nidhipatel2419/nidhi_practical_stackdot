const instituteSchema = require('../schemas/institute')


const getInstitutesList = async (req,res,next)=>{
    try {
      const result=await  instituteSchema.find();
      console.log("result",result)
      res.send({data :result,status:true});
    } catch (error) {
        console.log("error at getInstitutesList",error)
    }
}

module.exports = {getInstitutesList}


