const posts = [
    {title : 'Post One', body: 'This is post number 1'},
    {title : 'Post Two', body: 'This is post number 2'}
    ];
    
    function getPosts(){
        setTimeout( () => {
            let output = '';
            posts.forEach( (post, index) => {
                output += `<li>${post.body}</li>`;
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
    
    //getPosts();
    
    //createPost( {title: 'Post Three', body: 'This is post three'}, getPosts );
    createPost( {title: 'Post Three', body: 'This is post three'} )
        .then( getPosts )
        .catch( (err) => console.log(err));   //catch the error end write in console log
    