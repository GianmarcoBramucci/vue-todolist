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
                            done: true,
                            title: 'Upcoming',
                            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore?',
                        }
                        ]
                            }
                        }
                    }).mount('#app')


                    