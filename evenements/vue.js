new Vue({
    el: '#app',
    data:{
        counter: 0,
        counterBis: 100,
        tagName: "",
        counter10: 0
    },
    methods: {
        increase: function(){
            this.counter++;
        },
        decrease: function(){
            this.counterBis--;
        },
        hover: function(event){
            this.tagName = event.target.tagName;
        },
        increase10: function(step){
            this.counter10 += step;
        },
        alert: function(event){
            alert(event);
        }
    }
});