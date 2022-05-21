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
        repo : "full-time-force-task",
      });
      //PAGINATION SPLICE
      let dataLength = data.length+1;
      data = data.splice(limitData*(parseInt(page)-1),limitData*parseInt(page));
      console.log({data});
      
      res.code(200);
      return {
        ok : true,
        msg : "Get Data Repo",
        data,
        dataLength,
      }
      
    }

    const { owner , repo } =getUrlData(linkGitHubRepo);
    
    let data = await axiosConfig({
      owner,
      repo,
    });
    
    let dataLength = data.length;
    //PAGINATION SPLICE
    data = data.splice(limitData*(parseInt(page)-1),limitData*parseInt(page));

    res.code(200);
    return {
      ok : true,
      msg : "Get Data Repo",
      data,
      dataLength
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