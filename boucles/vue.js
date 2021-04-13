new Vue({
    el: '#app',
    data:{
        names: ['John','Jane','Alex']
    }
});

new Vue({
    el:'#app2',
    data: {
        names: [
            {
                name:'David',
                age: 24
            },
            {
                name:'Julie',
                age:30
            }
        ]
    }
});