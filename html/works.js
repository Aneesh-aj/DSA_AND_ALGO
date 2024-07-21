const http = require("http")
const  url  = require("url")

const server = http.createServer((req,res)=>{
    //   const parsedUrl = url.parse(req.url,true)
    const parsedUrl = url.parse(req.url,true)

      console.log(parsedUrl)
      console.log("path name :",parsedUrl.pathname)
      if(parsedUrl.pathname =="/"){
         res.writeHead(200,{"Context-type":"plain-text"})
         res.end("okkkkkkkk")
      }
})

server.listen(3000, ()=>console.log("running http://localhost:3000"))