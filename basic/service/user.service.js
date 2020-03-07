class UserService {
    constructor() {
        this.dataList = [
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
        ];

        this.show = true;
        
    }

    list() {
        return this.dataList;
    }

    startInterval() {
        setInterval( () => {
            const index = Math.floor(Math.random() * this.dataList.length);
            console.log( this.dataList[index] );
            this.dataList[index].name = 'Changed';
            this.dataList = Array.prototype.concat([], this.dataList);
            this.show = !this.show;
        }, 1000);
    }
}

const userService = new UserService();

const service = () => {
    return {
        list: [
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
            {name: 'Joe', email: 'test@test.com'},
        ],
        show: true,
        startInterval() {
            setInterval( () => {
                const index = Math.floor(Math.random() * this.list.length);
                console.log( this.list[index] );
                this.list[index].name = 'Changed';
                this.list = Array.prototype.concat([], this.list);
                this.show = !this.show;
            }, 1000);
        }
    }
}