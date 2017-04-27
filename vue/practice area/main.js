Vue.component("modal",{
   template: `
   <div>
        <div class="modal is-active">

        </div>

   </div>
   `
})

new Vue({
    el: "#root",

    data: {
        message:"Hello",
        inputMessage: "This is the message in the input"
    },

    methods: {
        clearMessage(){
            this.clearMessage.$remove(id)
        }
    }
})

