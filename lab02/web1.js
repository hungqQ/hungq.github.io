const http = require('http');
const host = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    res.write("<h1>Greenwich Vietnam</h1>");
    res.write("<h2>Computing Department</h2");
    res.write("<h3>Cloudcomputing Department</h3");
    res.end("<h4> we are learning node json</h4>");
});
server.listen(port, ()=>{
    console.log("server is running at http://" + host + ":" + port);
});