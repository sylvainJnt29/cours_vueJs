Vue.filter('firstWord',function(value) {
    if (!value) return '';
    value = value.toString();
    return value.split(' ')[0];
});
Vue.filter('capitalize',function(value) {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});
Vue.filter('getWordByIndex',function(value, index) {
    if (!value) return '';
    value = value.toString();
    return value.split(' ')[index];
});

// AVANT LA MISE EN PLACE DES FILTRES
// new Vue({
//     el: '#app',
//     data: {
//         myText: "du texte ^^"
//     },
//     filters: {
//         firstWord: function(value) {
//             if (!value) return '';
//             value = value.toString();
//             return value.split(' ')[0];
//         },
//         capitalize: function(value) {
//         if (!value) return '';
//         value = value.toString();
//         return value.charAt(0).toUpperCase() + value.slice(1);
//         }
//     }
// });

new Vue({
    el: '#app',
    data: {
        myText: "du texte ^^"
    }
});

new Vue({
    el: '#app2',
    data: {
        myText2: "du texte ^^"
    }
});