//// 7. Facade
// very important for JS developers, like qjuery
// жалобы = Complains
class Complains {
    constructor() {
        this.complains = [];
    };

    reply(complaint) { };

    add(complaint){
        this.complains.push(complaint);
        return this.reply(complaint);
    };
};

class ProductComplaints extends Complains {
    //override
    reply( {id, customer, details} ){
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complains { 
    //override
    reply( {id, customer, details} ){
        return `Service: ${id}: ${customer} (${details})`;
    }
}

// FACADE CLASS:
class ComplaintRegistry {
    register(customer, type, details) {

    }
}
