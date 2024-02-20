// const creatApp = Vue.creatApp;
// stessa cosa di scrivere:
const { createApp } = Vue

createApp({
    data() {
        return {

            todos: [
                { text: "Pulire il terrazzo", done: false },
                { text: "Annaffiare le piante", done: true },
                { text: "Preparare l'ombrello", done: false },
                { text: "Controllare la previsione del tempo", done: true }
            ],

        }
    },
    methods: {
        // funzione per rimuovere elemento "terminato"
        removal(index)
        {
            // implementiamo un controllo sull'array ed entrando dove la condizione è esatta andiamoa a dare la possibilità di cancellare
            if(this.todos[index].done == true)
            {
                // this usato per riferirsi agli elementi presenti all' inerno della nostra app
                this.todos.splice(index,1)
            }
        },
        
    },
}).mount('#app');