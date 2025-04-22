const classcategory = require('../schemas/classcategory')


const getClassCategoryList = async (req,res,next)=>{
    try {
      const result=await  classcategory.find();
      console.log("result",result)
      res.send({data :result,status:true});
    } catch (error) {
        console.log("error at getClassCategoryList",error)
    }

}


module.exports = {getClassCategoryList}


