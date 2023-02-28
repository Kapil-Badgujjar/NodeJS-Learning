const http = require('http');
const fs = require('fs');
const port = process.env.PORT||3000;

function readAndServe(path){
    return fs.readFileSync(path, 'utf8');
}

const server = http.createServer((req,res) => {
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    let url=req.url;
    let method=req.method;
    if(method==='GET'&&url==='/'){
        res.end(readAndServe("./home.html"));
    }
    else if(method==='GET'&&url==='/about.html'){
        res.end(readAndServe("./about.html"));
    }
    else{
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(port, ()=>{
    console.log(`listening on port ${port}`);
});