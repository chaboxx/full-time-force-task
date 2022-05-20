const { axiosConfig } = require("../utils/axios");
const { getUrlData } = require("../utils/getUrlData");


const getCommitData = async ( req , res) =>{
  
  const { linkGitHubRepo }  = req.query;
  
  try {

    if ( !linkGitHubRepo ){
      const data = await axiosConfig({
        owner : "chaboxx",
        repo : "Rappidin",
      });
      
      res.code(200);
      return {
        ok : true,
        msg : "Get Data Repo",
        data,
      }
      
    }

    const { owner , repo } =getUrlData(linkGitHubRepo);
    
    const data = await axiosConfig({
      owner,
      repo,
    });

    res.code(200);
    return {
      ok : true,
      msg : "Get Data Repo",
      data,
    }
    
  } catch (error) {
    console.log(error);
    res.code(500)
    return {
      ok : false,
      msg : "Error in the server"
    }
  }
}

module.exports = {
  getCommitData,
}