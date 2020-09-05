const posts = [
    {title : 'Post One', body: 'This is post number 1'},
    {title : 'Post Two', body: 'This is post number 2'}
    ];
    
    function getPosts(){
        setTimeout( () => {
            let output = '';
            posts.forEach( (post, index) => {
                output += `<li>${post.title}</li>`;
            });
            document.body.innerHTML = output;
        }, 1000);
    }
    //delete the callback and "return new Promise"
    function createPost(post) {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                posts.push(post);

                const error = false; // or true
                if(!error){
                    resolve();    // all ok!
                } else {
                    reject('Error: Something went wrong! :( ');    // all not ok, ERROR!
                }

            } , 3000);
        });
    }
    
    
    //createPost( {title: 'Post Three', body: 'This is post three'} )
    //    .then( getPosts )
    //    .catch( (err) => console.log(err));   //catch the error end write in console log
    
    // Promise.all
    const promise1 = Promise.resolve('Hello World!');
    const promise2 = 10;
    const promise3 = new Promise( (resolve, reject) => 
        setTimeout(resolve, 2000, 'Goodbye!') );
    const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then( res => res.json());

    Promise.all( [promise1, promise2, promise3, promise4] )              // array of Promises
        .then( (values) => console.log(values) );