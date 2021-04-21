/*                                      1ere partie
// création d'un component
Vue.component('testComponent', {
    data: function(){
        return {
            title: "Hello world !"
            }
        },
        template: "<h1>{{ title }}</h1>"

});


new Vue({
    el: '#app'
});
*/

//                                      2nde partie

/*
let component = 
    {data: function(){
        return {
            title: "Hello world !"
        }
        },
        template: "<h1>{{ title }}</h1>"
};

new Vue({
    el: "#app",
    components: {
        testComponent:component
        }
});
*/

//                                      3eme partie: les props

/*
Vue.component('testComponent', {
    props: ['title','text'],
    template: '<h1 @click="clickTest">{{ title }}</h1>'
});

new Vue({
    el: "#app",
    data:{
        // titleInstance: "HellooooOOoOOOOow !"
        titles: ["Bonjour","tout","le","monde"]
    }
});
*/


//                                      4eme partie: verification des props

Vue.component('testComponent', {
    props: {
        title: {
            type: [String,String],
            required: true,
            default: 'Hello World !'
        }
    },
    template: '<h1 @click="clickTest">{{ title }}</h1>'
});

new Vue({
    el: "#app"
});