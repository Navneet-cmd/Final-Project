
const createHTML = (id,TaskName, Description, AssignedTo, DueDate, Status) => `
<div class="card" style="width: 12rem;">        
    <ul class="list-group" id = "taskList" data-task-id=${id}>     
                  
                <div class="card-header bg-danger text-white">                      
                        <li class="list-group-item text-dark">${TaskName} </li>        
                        <li class="list-group-item text-dark">${Description}</li>
                        <li class="list-group-item text-dark">${AssignedTo}</li>
                        <li class="list-group-item text-dark">${DueDate}</li>
                        <span class="badge ${Status === 'TODO' ? 'badge-danger' : 'badge-success'}">${Status}</span>                                                  
                </div>                           
                    
                
        <button type= "button" id = "donebtn" class="btn btn-primary done-button ${Status === 'TODO' ? 'visible' : 'invisible'}">Done</button> 
        <button id = "donebtn1"  class="btn btn-outline-danger delete-button">Delete</button> 
       
        </ul>    

        </div>  
           
        
`;

  
class TaskManager {
    constructor(currentId = 0 ) {
        this.tasks = [];
        this.currentId = currentId;
    }          
            
                    
addtask(TaskName, Description, AssignedTo, DueDate) {
    const task = {
    id: this.currentId++,
    TaskName: TaskName,
    Description: Description,
    AssignedTo: AssignedTo,
    DueDate: DueDate,  
    Status : "TODO"    
};

this.tasks.push(task);


}

deleteTask(taskId) {
    const newTasks = [];

    for (let i = 0 ; i < this.tasks.length; i++){
        const task = this.tasks[i];
        if (task.id !==taskId) {
            newTasks.push(task);
        }
    }

    this.tasks = newTasks;
}



getTaskById(taskId) {

    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {   
        const task = this.tasks[i];    
        if (task.id === taskId) {            
            foundTask = task;
        }
    }

    return foundTask;

}

render() {

    const tasksHTMLlist = [];

        for ( let i = 0 ; i < this.tasks.length;i++ ){
            const task = this.tasks[i];
            const date = new Date(task.DueDate);
            const formattedDate = date.getDate() + '/'+(date.getMonth()+1 )+'/'+ date.getFullYear();
            const taskHTML = createHTML(task.id,task.TaskName,task.Description,task.AssignedTo,formattedDate,task.Status);
            tasksHTMLlist.push(taskHTML);
        }
    const taskHTML = tasksHTMLlist.join('\n');
    const taskList = document.querySelector('#taskList');
    taskList.innerHTML = taskHTML
    }

    save() {
      
        const tasksJson = JSON.stringify(this.tasks);

       
        localStorage.setItem('tasks', tasksJson);

       
        const currentId = String(this.currentId);

     
        localStorage.setItem('currentId', currentId);
    }
    load () {

       if (localStorage.getItem('tasks')) {

        const tasksJson = localStorage.getItem('tasks');
        this.tasks = JSON.parse(tasksJson);
       }
       if (localStorage.getItem ('currentId')) {
           const currentId = localStorage.getItem('currentId');
           this.currentId = Number(currentId);

       }
    }

  

}

