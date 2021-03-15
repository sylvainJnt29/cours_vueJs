new Vue({
    el: '#app',
    data:{
        isYellow: false,
        isUnderline: false,
        color: 'red',
        size: 35
    },
    computed: {
        myClass: function(){
            return {
                yellow: this.isYellow,
                underline: this.isUnderline
            }
        },
        myStyle: function(){
            return {
                'font-size': this.size+'px'
            }
        }
    }
});