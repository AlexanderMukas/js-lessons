//// 9. Proxy
// very important for JS

function networkFetch(url) {
    return `${url} - Answer from server`;
}

const cache = new Set();       // uniq

const proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        const url = args[0];   // get first arg of function

        if( cache.has(url) ) {
            return `${url} - *Answer from cache*`
        } else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        };
    }
}); 

console.log(  proxiedFetch('argular.io')   );
console.log(  proxiedFetch('react.io')   );
console.log(  proxiedFetch('argular.io')   );


