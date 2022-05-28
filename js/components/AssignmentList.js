import Assignment from "./Assignment.js"
export default{
    components:{Assignment},
    template:`
     <section v-show="assignments.length">
     <h2>{{ title }}
        <span> ({{assignments.length}})</span>
     </h2>
     <button :class="{
         'blue':tag === currentTag
     }" @click="currentTag = tag" v-for="tag in tags">{{tag}}</button>
      <ul>
          <assignment 
           v-for="assignment in FilteredAssignments"
           :key="assignment.id"
           :assignment ="assignment"
           ></assignment>
       </ul> 
        <pre> {{ assignments}}</pre>
      </section>`,

      data(){
          return {
              currentTag: 'all'
          }
      },
      props:{
          assignments:Array,
          title:String
      },
      computed: {
          tags(){
            //return new Set(this.assignments.map(a => a.tag));
            return ['all',... new Set(this.assignments.map(a => a.tag))];
          },
          FilteredAssignments(){
              if(this.currentTag == 'all'){
                  return this.assignments;
              }
              return this.assignments.filter(a => a.tag == this.currentTag);
          }

      }

      
}