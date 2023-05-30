// const http = require('http')
// const fs = require('fs')

// const server = http.createServer((req, res) => {

//     // res.writeHead(200, {"Content-Type": "text/plain"});
//     // res.end("Hello world")



//     // const superHero = {
//     //     firstName : "Bruce",
//     //     lastName : "Wayne",
//     // }

//     // res.writeHead(200, {"Content-Type": "application/json"});
//     // res.end(JSON.stringify(superHero));




//     // res.writeHead(200, {"Content-Type": "text/html"});

//     // fs.createReadStream(__dirname + '/index.html').pipe(res);




//     // res.writeHead(200, {"Content-Type": "text/html"});

//     // const html = fs.readFileSync('./httpModule/index.html', 'utf-8')

//     // res.end(html)



//     const name = "Himanshu"

//     res.writeHead(200, {"Content-Type": "text/html"});

//     let html = fs.readFileSync("./httpModule/index.html", "utf-8");

//     html = html.replace("{{name}}", name);
//     res.end(html)
// })


// server.listen(3000, () => {
//     console.log('server running on port 3000')
// })














const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    // res.end(req.url)

    if(req.url === "/"){
        res.writeHead(200, {"Content-Type" : "text/plain"})

        res.end("Home Page")
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type" : "text/plain"})

        res.end("About Page")
    }
    else if(req.url === "/api"){
        res.writeHead(200, {"Content-Type" : "application/json"})

        res.end(JSON.stringify({
            firstName : "Bruce",
            lastName : "Wayne",
        }))
    }
    else{
        res.writeHead(404)
        res.end("Page not found")
    }
})


server.listen(3000, () => {
    console.log("server is running on port 3000")
})