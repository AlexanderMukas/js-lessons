// 13. Mediator 
// new users in chat without socket

class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);

    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}


class ChatRoom{
    constructor(){
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) {
            to.receive(message, from);
        } else {
            Object.keys(this.users).forEach( key => {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from)
                }
            })
        }
    }
}

const vlad = new User('Vladlen');
const vasiliy = new User('Vasiliy');
const elena = new User('Elena');

const room = new ChatRoom();

room.register(vlad);
room.register(vasiliy);
room.register(elena);

vlad.send('Hello', elena);
elena.send('Hello hello', vlad);
vasiliy.send('Hello to everybody!');


