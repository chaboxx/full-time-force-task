

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
      console.log("Servidor corriendo en el puerto ",this.port);
    })
  }
  middlewares(){
    this.app.register(require('@fastify/cors'), { 
      // put your options here
    })
    // this.app.register(require("@fastify/cors"), {
    //   origin: true,
    //   allowedHeaders: [
    //       'Origin', 
    //       'X-Requested-With', 
    //       'Accept', 
    //       'Content-Type', 
    //       'Authorization'
    //   ],
    //   methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'DELETE'],
    // });
  }
  routes(){

    this.app.get("/",getCommitData)
    
  }

}

module.exports = {
  Server,
}