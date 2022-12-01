const http = require ('http')
const PORT = 5000
const sever = http.createServer((req,res) => {
    if(req.url === '/'){
       res.writeHead(200,{'Contect-Type':'text/html'})
       res.write('<h1>Hello, Node.js</h1>')
       res.end()
    }
    else if(req.url === '/about'){
       res.writeHead(200,{'Contect-Type':'text/html'})
       res.write('<h1>About page!</h1>')
       res.end()
    }else if(req.url === '/student'){
       res.writeHead(200,{'Contect-Type':'text/html'})
       res.write('<h1>Student page!</h1>')
       res.end()
    } else {
       res.end('Invalis Request')
    }
})

sever.listen
http.Server.listen(5000,(req,res))=>{
    console.log(`Sever Running `)
}