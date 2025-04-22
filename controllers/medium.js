const mediumsSchema = require('../schemas/medium')


const getMediumList = async (req,res,next)=>{
    try {
      const result=await  mediumsSchema.find();
      console.log("result",result)
      res.send({data :result,status:true});
    } catch (error) {
        console.log("error at getMediumList",error)
    }

}


module.exports = {getMediumList}


