
const axios = require("axios");

const apiConection = axios.create({
  baseUrl: "https://api.github.com/repos",
  headers : {
    "Content-type" : "application/json",
    "Accept": "application/vnd.github.v3+json",

  }
})

const axiosConfig = async ( ) =>{
  try {
    const resp = await apiConection.get("/chaboxx/Rappidin/commits");
    console.log({resp: resp.data});
    
  } catch (error) {
    console.log(error);

  }


}

module.exports = {
  axiosConfig,
}