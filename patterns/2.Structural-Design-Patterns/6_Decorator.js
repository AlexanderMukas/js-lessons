//// 6. Decorator
// add some new in Object and return (like alien inject)

class Server {
    constructor (ip, port){
        this.ip = ip;
        this.port = port
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

//decorator aws
function aws(server){
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url
    }
    return server;
}

//decorator azure
function azure(server) {
    server.isAZURE = true;
    server.port += 500;
    return server;
};

// wrap this in aws function
// const s1 = new Server('12.34.56.78', 8080);
const s1 = aws( new Server('12.34.56.78', 8080) );
const s2 = azure( new Server('88.33.22.173', 1000) );

console.log(s1.isAWS);
console.log(s1.awsInfo());

console.log(s2.isAZURE);
console.log(s2.url);