const educationboard = require('../schemas/educationboard')


const geteductionBoardList = async (req,res,next)=>{
    try {
        console.log("educationboard",educationboard)
      const result=await  educationboard.find();
      console.log("result",result)
      res.send({data :result,status:true});
    } catch (error) {
        console.log("error at geteductionBoardList",error)
    }

}


module.exports = {geteductionBoardList}


