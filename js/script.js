import {todoList} from "./data.js"; 

Vue.createApp({
    data(){
        return{
            todoList, 
            input: '',
            todoTemp:{}
        }
    },
    methods: {
        deleteTodo: function(array,object){
            array.splice((object.id-1),1,'');
            
        },
        changeStatus: function(object){
            if(object.done){
                object.done= false;
            }
            else{
                object.done= true;
            }
        }

    },
    computed:{
        addTodo: function(){
            this.todoTemp.done=false;
            this.todoTemp.text= this.input;
            this.todoTemp.id= (this.todoList.length + 1)
            this.todoList.push(this.todoTemp);
            this.todoTemp={};
            this.input='';
        },
    },
    mounted(){
       
    }
}).mount('#app')