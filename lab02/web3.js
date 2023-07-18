const http = require('http');
const fs = require('fs');
const host = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    switch (req.url){
        case "/":
            fs.readFile("index.html", (err, data) => {
                if (err) {
                    console.error(err); 
                }
                else {
                    res.write(data);
                    res.end();
                    
                }
            });
            break;
        case "/login":
            fs.readFile("login.html", (err, data) => {
                if (err) {
                        console.error(err); 
                }
                else {
                        res.write(data);
                        res.end();
                    }
                });
                break;
        case "/contact":
            fs.readFile("contact.html", (err, data) => {
                if (err) {
                    console.error(err); 
                }
                else {
                    res.write(data);
                    res.end();
                }
            });
            break;
        default: 
        res.write("<h1>404 not found</h1>");
        res.end();
    }
});

server.listen(port, ()=>{
    console.log("server is running at http://" + host + ":" + port);
});