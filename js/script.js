const app = new Vue({
    el: '#root',
    data: {
        arrTodo: [
            {
                text: 'Comprare il biglietto aereo',
                done: true
            },
            {
                text: 'Verificare la documentazione necessaria per il viaggio',
                done: true
            },
            {
                text: 'Comprare souvenirs',
                done: false
            },
            {
                text: 'Preparare la valigia',
                done: false
            },
            {
                text: 'Fare il check-in',
                done: false
            },
            {
                text: 'Stampare il biglietto aereo',
                done: false
            },
            {
                text: 'Trovare un mezzo di trasporto per andare all\'aeroporto',
                done: false
            },
        ]
    },
    methods: {
        deleteTodo(index) {
            this.arrTodo.splice(index, 1);
        }
    }
})