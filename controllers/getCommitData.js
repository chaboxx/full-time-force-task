const { axiosConfig } = require("../utils/axios");


const getCommitData = async ( req , res) =>{

  const resp = await axiosConfig();
  res.code(400);
  return {
    hola : "sd"
  }
}

module.exports = {
  getCommitData,
}