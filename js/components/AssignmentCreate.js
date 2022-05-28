export default{
     template:
     ` <form @submit.prevent="createAssignment">
         <input v-model="newAssignment" placeholder="Enter Task">
         <button type="submit">Add Task</button>
     </form>
     `,
     data() {
         return {
             newAssignment:''
         };
     },
     methods:{
        createAssignment(){
            this.$emit('createAssignment',this.newAssignment)
            this.newAssignment= ''
        }
     }

}