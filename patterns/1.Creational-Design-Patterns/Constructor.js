// 1. Constructor

//////////////////////////////// es5 //////////////////////////
// Class implementation
function Server( name, ip ) {
    this.name = name
    this.ip = ip
}

// create like Class method
Server.prototype.getUrl = function() {
    return `https://${this.ip}:80`;
}

// create new instance object
const aws = new Server('AWS German', '82.21.21.32');
console.log( aws.getUrl() );