
const axios = require("axios");



const apiConnection = axios.create({
  baseURL: "https://api.github.com",
  headers : {
    "Accept": "application/vnd.github.v3+json",
  },
  auth :{
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET,
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