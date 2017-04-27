Vue.component("modal", {
    template: `
            <div>
                <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    
                    <header class="modal-card-head">
                    
                        <p class="modal-card-title">
                            
                            <slot name="header"></slot>
                        
                        </p>
                        
                        <button class="delete" @click="$emit('close')"></button>
                        
                    </header>

                    <section class="modal-card-body">
                        <slot></slot>
                    </section>
                   
                    <footer class="modal-card-foot">
                        <slot name="footer">
                            <a class="button is-primary"> Okay</a>
                            <a class="button">Cancel</a>
                        </slot>

                    </footer>
                
                </div>
                </div>
            </div>`
        
})

new Vue({
    el: "#root",
    data:{
        showModal: true
    }
})