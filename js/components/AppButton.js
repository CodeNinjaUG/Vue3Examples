export default{
    template: `
       <button style="background-color:black; color:white;" :disabled="processing"><slot/></button>
    `,
     mounted() {
        alert('hello');
    },
    data(){
        return {
            processing:false
        };
    }

}