/*
var data = {
    title: "Les instances de Vue.js"
}

// var vm = vue model
var vm = new Vue({
    el: '#app',
    data: data,
    methods: {
        show: function(){
            this.title = "3ème titre"
            console.log(this.title)
        }
    }
});

setTimeout(function(){
    vm.title = "Nouveau Titre !"
}, 1000)

// vm.show()
// console.log(vm.title)

data.property = "TEST";
// console.log(vm.$el)
// console.log(vm.$data)
// console.log(vm.$data.title)

new Vue({
    el: '#app2',
    data:{ 
    title: "Titre de #app2"
    }
});
*/


//                                      liaison entre plusieurs instances
/*
var vm1 = new Vue({
    el: '#app',
    data:{
        title: "Titre de vm1"
    },
    methods: {
        show: function(){
            console.log(this.title)
        }
    }
});

console.log(vm1.$refs)

var vm2 = new Vue({
    el: '#app2',
    data:{ 
    title: "Titre de vm2"
    },
    methods: {
        edit: function(){
            this.title = vm1.title
        }
    }
});

setTimeout(function(){
    vm2.edit()
},1000)



//                                      Créer un template depuis l'instance $mount
var vm3 = new Vue({
    template: "<h3>Template !</h3>"
})
vm3.$mount('#app3')
*/

//                                      Les hooks

var vm1 = new Vue({
    el: "#hooks",
    data: {
        title : "Hello World :)"
    },
    methods: {
        editTitle: function(){
            this.title = "Nouveau titre !"
        }
    },
    beforeCreate: function(){
        console.log('Before create')
    },
    created: function(){
    console.log('Created')
    },
    beforeUpdate: function(){
        console.log('Before update')
    },
    updated: function(){
    console.log('Updated')
    },
    beforeDestroy: function(){
        console.log('Before destroy')
    },
    destroyed: function(){
    console.log('Destroyed')
    }
})

setTimeout(function(){
    vm1.$destroy()
}, 1500)