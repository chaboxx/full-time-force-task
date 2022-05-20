const { axiosConfig } = require("../utils/axios");
const { getUserRepo } = require("../utils/getUserRepo");


const getCommitData = async ( req , res) =>{

  const { linkGitHubRepo }  = req.query;
  //https://github.com/chaboxx/Rappidin

  if ( !linkGitHubRepo ){
    const resp = await axiosConfig({
      owner : "chaboxx",
      repo : "Rappidin",
    });
    
    res.code(200);
    return {
      resp
    }

  }
  const { owner , repo } =getUserRepo(linkGitHubRepo);
  const resp = await axiosConfig({
    owner,
    repo,
  });
  


  res.code(200);
  return {
    resp
  }
}

module.exports = {
  getCommitData,
}