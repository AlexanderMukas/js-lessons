// 1. Constructor

//////////////////////////////// es5 //////////////////////////
// Class implementation and create like Class method
function Server( name, ip ) {
    this.name = name
    this.ip = ip
};
Server.prototype.getUrl = function() {
    return `https://${this.ip}:80`;
};

// create new instance object
const aws = new Server('AWS German', '82.21.21.32');
console.log( aws.getUrl() );

//////////////////////////////// es6 //////////////////////////

class Server2 {
    constructor( name, ip ) {
        this.name = name
        this.ip = ip
    };
    getUrl() {
        return `https://${this.ip}:80`;
    };
};

// create new instance object
const aws2 = new Server2('AWS German', '82.21.21.32');
console.log( aws2.getUrl() );