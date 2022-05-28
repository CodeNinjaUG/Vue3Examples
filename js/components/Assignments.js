import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'
export default{
    components:{ AssignmentList , AssignmentCreate},
    template : 
    `<assignment-list :assignments="filters.inProgress" title="In Progress Tasks"></assignment-list>
     <assignment-list :assignments="filters.completed" title="Completed Tasks"></assignment-list> 
     <assignment-create @createAssignment="add"></assignment-create>
     `,

 data() {
        return {
           assignments:[
           {name :"finish project" , complete:false, id:1},
           {name :"Read Chapter 4" , complete:false , id:2},
           {name :"Turn in HomeWork" , complete:false, id:3},
           {name :"Code project" , complete:false, id:4},
        ],
         newAssignment:'',
           //greeting:'What is Up'
        };
    },
computed:{
    filters(){
        return {
          inProgress: this.assignments.filter(assignment => !assignment.complete),
          completed:  this.assignments.filter(assignment => assignment.complete),
        }
    }
        // completedAssignments(){
        //     return this.assignments.filter(assignment => assignment.complete);
        // },
        // IncompletedAssignments(){
        //     return this.assignments.filter(assignment => ! assignment.complete);
        // }

       },
       methods:{
          add(name){
           alert(name)
            this.assignments.push({
               name: name,
               completed:false,
               id:this.assignments.length + 1
            });
          }
       },
    //    components:{
    //     'app-button': AppButton,
    //     // 'assignments-list':{},
    //     // 'assignments-list-item':{},
    //     // 'app-accordion':{},
    // }
}