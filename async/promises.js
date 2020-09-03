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

                const error = false;
                if(!error){
                    resolve();    // all ok!
                } else {
                    reject();    // all not ok, ERROR!
                }

            } , 3000);
        });
    }
    
    //getPosts();
    
    createPost( {title: 'Post Three', body: 'This is post three'}, getPosts );
    