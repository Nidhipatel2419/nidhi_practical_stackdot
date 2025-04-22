const subject = require("../schemas/subject");

const getSubjectList = async (req, res, next) => {
  try {
    const standardid = req.query?.standardid;
    const result = await subject.find({
      standardid: standardid,
    });
    res.send({ data: result, status: true });
  } catch (error) {
    console.log("error at getSubjectList", error);
  }
};

module.exports = { getSubjectList };
