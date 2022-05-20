
const axios = require("axios");

const apiConection = axios.create({
  baseURL: "https://api.github.com",
  headers : {
    "Accept": "application/vnd.github.v3+json",
  }
});

const axiosConfig = async ({ owner , repo }) =>{
  
  try {
    //GET
    const resp = await apiConection.get(`/repos/${owner}/${repo}/commits`);
    
    return resp.data;

  } catch (error) {
    console.log(error);

  }


}

module.exports = {
  axiosConfig,
}