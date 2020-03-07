const service = () => {
    return {
        url: `http://localhost:3000/employee`,
        list: [],
        dispatcher: null,
        startInterval() {
            setInterval( () => {
                const index = Math.floor(Math.random() * this.list.length);
                console.log( this.list[index] );
                this.list[index].name = 'Changed';
                this.list = Array.prototype.concat([], this.list);
                this.show = !this.show;
            }, 1000);
        },
        setDispatcher(dispatcher) {
            this.dispatcher = dispatcher;
            this.get();
        },
        get(id) {
            const url = `${this.url}${id ? '/' + id : ''}`;
            fetch(url, {cors: true, method: 'GET'})
                .then( response => response.json() )
                .then( data => {
                    this.list = data.slice(0, 5);
                    this.dispatcher('refresh', {refresh: true});
                });
        },
        remove(id) {
            const url = `${this.url}/${id}`;
            fetch(url, {cors: true, method: 'DELETE'})
                .then( response => response.json() )
                .then( data => {
                    this.get();
                });
        }
    }
}
