const http=require('http');


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to the page')
        return;
    }
    if(req.url==='/about'){
        res.end('our history')
        return;
    }

res.end(`<h1>OOps</h1>
    <p>We cant seem to find the page you are looking</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000)
