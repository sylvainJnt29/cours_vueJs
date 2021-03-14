new Vue({
    el: '#app',
    data:{
        title: "Super intro !",
        strongTag: "<strong>IMPORTANT !</strong>"
    },
    methods: {
        reverseTitle: function(){
            this.title = this.title.split('').reverse().join('');
        }
    }
});