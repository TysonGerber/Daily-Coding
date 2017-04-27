
Vue.component("coupon", {
    template: "<input placeholder='Enter your coupon code' @blur='onCouponApplied'>",

    methods: {
        onCouponApplied(){
           this.$emit('applied')
        }
    }

});

new Vue({
    el: "#root",
    data:{
        title: "Hello",
        couponApplied: false
    },
     methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    },
   

});

