const fastify = require("fastify");

const path = require('path');

const { getCommitData } = require("../controllers/getCommitData");

class Server {

  constructor(port = process.env.PORT){
    this.port = port;
    this.app = fastify({
      logged:true
    });
    this.middlewares();
    this.routes();
    this.init();
  }

  init(){
    
    this.app.listen(this.port,()=>{
      console.log("Server running on port ",this.port);
    })
  }
  middlewares(){
    this.app.register(require('@fastify/cors'));
   
    this.app.register(require('@fastify/static'), {
      root: path.join(__dirname, '../public/'),
    })
    
  }
  routes(){

    this.app.get("/get-data",getCommitData);
    
  }

}

module.exports = {
  Server,
}