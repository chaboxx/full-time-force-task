

const fastify = require("fastify");
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
  }
  routes(){

    this.app.get("/",getCommitData);
    
  }

}

module.exports = {
  Server,
}