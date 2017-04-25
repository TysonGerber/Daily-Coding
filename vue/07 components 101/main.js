Vue.component('task', {

    template: '<li><slot></slot></li>'
})


Vue.component('teams', {
    template: '<li><slot><slot></li>',

    data(){
        return {
            message: "Jazz's Mascot is a Bear",
            raptorsMessage: "Jazz's Mascot is a Raptor",
            nuggetsMessage: "Jazz's Mascot is a Mountain Lion",
            bullsMessage: "Jazz's Mascot is a Bull",
            OklahomaMessage: "Jazz's Mascot is a Buffalo",
        };
    }
});

new Vue({
    el: "#root"
});