new Vue({
    el: '#app',
    data: {
        title: 'Calculator',
        display: ''
    },
    methods: {
        adicionar(v){
            if(v == '='){
                this.display = eval(this.display)
            }else{
                this.display += v
            }
        },
        clean(){
            this.display = ''
        }
    }  
})