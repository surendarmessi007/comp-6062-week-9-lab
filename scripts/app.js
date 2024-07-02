const app = Vue.createApp({

    data(){
        return{
            greeting: 'Welcome to Vue.js',
            message: 'This message is displayed based on the boolean property',
            showMessage: true
        };
    }
});

app.mount('#app');