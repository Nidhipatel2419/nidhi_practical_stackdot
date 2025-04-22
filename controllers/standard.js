const standards = require("../schemas/standard");

const getStandardList = async (req, res, next) => {
  try {
    const classcategoryid = req.query?.classcategoryid;
    const result = await standards.find({
      classcategoryid: classcategoryid,
    });
    res.send({ data: result, status: true });
  } catch (error) {
    console.log("error at getStandardList", error);
  }
};

module.exports = { getStandardList };
