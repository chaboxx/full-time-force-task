
const axios = require("axios");



const apiConnection = axios.create({
  baseURL: "https://api.github.com",
  headers : {
    "Accept": "application/vnd.github.v3+json",
  },
  auth :{
    username: "de0f96cefe2d22cf464a",
    password: "d7ba2fe35105c014c69ddb2a7f698718e7d96bac",
  }
});

const axiosConfig = async ({ owner , repo }) =>{
  
  try {
    //GET
    const resp = await apiConnection.get(`/repos/${owner}/${repo}/commits`);
    
    return resp.data;

  } catch (error) {
    console.log(error);
    throw new Error(error.response.statusText);
    
  }

}

module.exports = {
  axiosConfig,
}