const http = require('http');
const fs = require('fs');
const host = "localhost";
const port = 3000;
const server = http.createServer((req, res) => {
    switch (req.url){
        case "/home":
            fs.readFile("home.html", (err, data) => {
                if (err) {
                    console.error(err); 
                }
                else {
                    res.write(data);
                    res.end();
                    
                }
            });
            break;
        case "/hanoi":
            fs.readFile("hanoi.html", (err, data) => {
                if (err) {
                        console.error(err); 
                }
                else {
                        res.write(data);
                        res.end();
                    }
                });
                break;
        case "/danang":
            fs.readFile("danang.html", (err, data) => {
                if (err) {
                    console.error(err); 
                }
                else {
                    res.write(data);
                    res.end();
                }
            });
            break;
            case "/hcm":
                fs.readFile("hcm.html", (err, data) => {
                    if (err) {
                        console.error(err); 
                    }
                    else {
                        res.write(data);
                        res.end();
                    }
                });
            break;
            case "/cantho":
                 fs.readFile("cantho.html", (err, data) => {
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