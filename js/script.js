const app = new Vue({
    el: '#root',
    data: {
        newTodo: {
            text: '',
            done: false
        },
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
        // Funzione che elimina un todo dalla lista arrTodo
        deleteTodo(index) {
            this.arrTodo.splice(index, 1);
        },
        // Funzione che aggiunge un nuovo elemento alla lista arrTodo
        addTodo() {
            if (this.newTodo.text.trim() != '') {
                this.arrTodo.push(this.newTodo);
                this.newTodo = {
                    text: '',
                    done: false
                };
            }
        },
        // Funzione che inverte lo stato della chiave "done" quando si clicca sul testo del todo
        invertDoneUndone(index) {
            if (this.arrTodo[index].done == true) {
                this.arrTodo[index].done = false;
            } else if (this.arrTodo[index].done == false) {
                this.arrTodo[index].done = true;
            };
        }
    }
})