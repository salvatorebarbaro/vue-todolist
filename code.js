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
        removal()
        {
            if(this.current_item.done == true)
            {
                todos.slice(index)
            }
        },
        
    },
}).mount('#app');