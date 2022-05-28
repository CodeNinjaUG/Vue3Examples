export default{
    template: `
       <button :class="{
           'bd-radius': true,
           'bg-color-primary': type=='primary',
           'bg-color-secondary': type=='secondary',
           'bg-color-muted': type =='muted',
           'is-loading':processing
       }"  :disabled="processing">
       <slot/>
       </button>
    `,
     mounted() {
        
    },
    props:{
       type :{
           type: String,
           default: 'primary'
       },
       processing:{
           type: Boolean,
           default: false
       }
    },
    data(){
        // return {
        //     processing:false
        // };
    }

}