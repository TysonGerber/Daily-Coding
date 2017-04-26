Vue.component('task-list', {
    template: `
    <div><task v-for="task in tasks">{{task.toDo}}</task></div>
    `,

    data() {
        return {
            task: [
                { toDo: "Oil Change", complete: false },
                { toDo: "Change windsheild wipers", complete: false },
                { toDo: "Tire Rotation", complete: false },
                { toDo: "Shocks", complete: false },
                { toDo: "Air Filters", complete: false },
            ]
        }
    }
})





























Vue.component('task-list', {

    //whenever you have a template in a component it always needs to have a single root element.
    // this will not work so what we do is wrap it in a div :  template: '<task v-for="task in tasks">{{task.task}}</task>',

    template: `
        <div>
        <task v-for="task in tasks">{{task.toDo}}</task>
        </div>
        `,

    data() {
        return {
            tasks: [
                { toDo: "testing internet", completed: true },
                { toDo: "Finish Vue Exercises", completed: false },
                { toDo: "Work on SaaS stuff", completed: false },
                { toDo: "Work on WordPress if I have time", completed: true },
                { toDo: "Watch Jazz Game", completed: false },
                { toDo: "Work on WordPress if I have time", completed: false },
            ]
        }
    }
})

Vue.component('task', {

    template: '<li><slot></slot></li>'
})


new Vue({
    el: "#root"
});