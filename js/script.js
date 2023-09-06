const { createApp } = Vue
        createApp({
            data(){
                return{
                    tobooList:[
                        {
                            done: true,
                            title: 'New Task',
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatum eos a quos?',
                        }, 
                        {
                            done: true,
                            title: 'Today',
                            text: 'Lorem ipsum dolor sit amet.',
                        }, 
                        {
                            done: false,
                            title: 'Upcoming',
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore?',
                        }
                        ],
                        addNewTask:{
                                    done: false,
                                    title: 'new task',
                                    text : ''
                        }

                            }
                        },
                        methods:{
                            deleteTobo(index){
                                this.tobooList.splice(index,1)
                            },
                            toogle(index){
                                this.tobooList[index].done=!this.tobooList[index].done;
                            }, 
                            addTask(newTask,addNewTask,tobooList){
                                addNewTask={
                                    done: false,
                                    title: 'new task',
                                    text : newTask
                                }
                                tobooList.push(addNewTask)
                                console.log(tobooList)
                                newTask=''
                            }
                        }
                    }).mount('#app')


