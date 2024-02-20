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
        add_task(wow)
        {
            // "Questa riga di codice crea un nuovo array utilizzando lo spread operator per mantenere l'integrità dei dati, poi aggiunge una nuova attività a questo nuovo array di oggetti todos."
            this.todos=[...this.todos, {text: this.wow, done: false}]
            this.wow="";
        },
        change(index)
        {
            // this.todos[index].done puo essere definito come il percorso che noi facciamo all'interno dell'array di oggetti fino ad arrivare a done ogni volta
            this.todos[index].done =! this.todos[index].done
            // usaimo l'operatore di inversione cosi da riuscire a invertire il valore

        }
        
    },
}).mount('#app');