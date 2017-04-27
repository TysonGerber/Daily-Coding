
window.Event = new Vue();
Vue.component("coupon", {
    template: "<input placeholder='Enter your coupon code' @blur='onCouponApplied'>",

    methods: {
        onCouponApplied(){
           Event.$emit('applied');

        }
    }

});

new Vue({
    el: "#root",
    data:{
        title: "Hello",
        couponApplied: false,
        
    },
   
   created(){

        Event.$on('applied', () =>
           alert("Handling it"));
    //    Event.$on('applied', function (){
    //        alert("Handling it")
    //    })
   }
   

});

