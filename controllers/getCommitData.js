const { axiosConfig } = require("../utils/axios");
const { getUrlData } = require("../utils/getUrlData");


const getCommitData = async ( req , res) =>{
  
  const { linkGitHubRepo , page }  = req.query;
  //LIMIT NUMBER OF COMMITS
  const limitData = 6;
  
  try {

    if ( !linkGitHubRepo ){
      let data = await axiosConfig({
        owner : "chaboxx",
        repo : "Rappidin",
      });

      //PAGINATION SPLICE
      data = data.splice(limitData*(page-1),limitData*page);
      
      res.code(200);
      return {
        ok : true,
        msg : "Get Data Repo",
        data,
      }
      
    }

    const { owner , repo } =getUrlData(linkGitHubRepo);
    
    let data = await axiosConfig({
      owner,
      repo,
    });
    
    //PAGINATION SPLICE
    data = data.splice(limitData*(page-1),limitData*page);

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