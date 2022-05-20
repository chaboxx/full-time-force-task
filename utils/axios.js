
const axios = require("axios");



const apiConnection = axios.create({
  baseURL: "https://api.github.com",
  headers : {
    // "Authorization": `Bearer ${process.env.GITHUB_TOKEN}`,
    "Accept": "application/vnd.github.v3+json",
  },
  // auth :{
    
  //   username: process.env.USERNAME_GITHUB,
  //   password: process.env.PASSWORD_GITHUB,

  // }
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