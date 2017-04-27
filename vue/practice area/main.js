new Vue({
    el: "#root",

    data: {
        message:"Hello",
        inputMessage: "This is the message in the input"
    },

    methods: {
        clearMessage(){
            this.clearMessage = '';
        }
    }
})