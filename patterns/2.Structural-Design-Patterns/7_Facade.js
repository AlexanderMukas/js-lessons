//// 7. Facade
// very important for JS developers, like qjuery
// жалобы = Complains
class Complaints {
    constructor() {
        this.complains = [];
    };

    reply(complaint) { };

    add(complaint){
        this.complains.push(complaint);
        return this.reply(complaint);
    };
};

class ProductComplaints extends Complaints {
    //override
    reply( {id, customer, details} ){
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplaints extends Complaints { 
    //override
    reply( {id, customer, details} ){
        return `Service: ${id}: ${customer} (${details})`;
    }
}

// FACADE CLASS:
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;
        if (type === 'service'){
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add( {id, customer, details} );
    }
}

const registry = new ComplaintRegistry();
console.log( registry.register( 'Alexander Mukas', 'service', 'error 404') );
console.log( registry.register( 'Elena Ivanova', 'product', 'something wrong') );