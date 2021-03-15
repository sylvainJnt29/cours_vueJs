new Vue({
    el: '#app',
    data:{
        counter: 0,
        counter2: 0,
        word: "Positif"
    },
    computed: {
        wordComputed: function(){
            console.log('In computed');
            return this.counter < 0 ? 'Négatif' : 'Positif';
        }
    },
    watch: {
        counter: function(value){
            console.log('In watch');
            return this.counter < 0 ? 'Négatif' : 'Positif';
        }
    },
    methods: {
        wordMethod: function(){
            console.log('In method');
            return this.counter < 0 ? 'Négatif' : 'Positif';
        }
    }
});