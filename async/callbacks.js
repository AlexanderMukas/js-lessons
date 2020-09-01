const posts = [
{title : 'Post One', body: 'This is post number one'},
{title : 'Post One', body: 'This is post number one'}
];

function getPosts(){
    setTimeout( () => {
        let output = '';
        posts.forEach( (post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 3000);

}

getPosts();