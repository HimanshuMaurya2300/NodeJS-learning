const cluster = require("cluster")
const http = require("http")
const os = require('os')

// console.log(os.cpus().length)

if(cluster.isMaster){

    console.log(`Master process ${process.pid} is running`)

    cluster.fork()
    cluster.fork()
}
else{

    console.log(`Worker process ${process.pid} started`)

    const server = http.createServer((req, res) => {

        if(req.url === "/"){
    
            res.writeHead(200, {"Content-Type" : "text/plain"});
    
            res.end("Home page")
        }
        else if(req.url === "/slow-page"){
    
            for(let i=0; i<6000000000; i++){}
    
            res.writeHead(200, {"Content-Type" : "text/plain"})
    
            res.end("Slow Page")
        }
    });
    
    
    server.listen(8000, () => console.log("server is running on port 8000"))
}