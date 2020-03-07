class UserService {
    constructor() {
        this.list = [
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
        ];

        setInterval( () => {
            const index = Math.floor(Math.random() * this.list.length);
            console.log( this.list[index] );
            this.list[index].name = 'Changed';
        }, 1000);
    }
}

const userService = new UserService();
