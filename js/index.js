const taskManager = new TaskManager(0);

taskManager.load();

taskManager.render();

const userForm = document.querySelector('#userForm');


    
let today = new Date();

let dd = today.getDate()+1;
 let mm = today.getMonth()+1; //January is 0!
 let yyyy = today.getFullYear();

 if(dd<10){
 dd='0'+dd
 } 
 if(mm<10){
 mm='0'+mm
}
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("DueDate").setAttribute('min', today);

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userFormName  = document.querySelector('#TaskName');
    const userFormDescription  = document.querySelector('#Description');    
    const userFormAssigned  = document.querySelector('#AssignedTo');
    const userFormDueDate  = document.querySelector('#DueDate');
    //const userFormStatus = document.querySelector('#Status');




    
    if (userFormName .value.length > 0 && userFormName.value.length <= 8) {
        userFormName .classList.add('is-valid');
        userFormName .classList.remove('is-invalid');

    }
        
    else {
        userFormName .classList.add('is-invalid');
        userFormName .classList.remove('is-valid');
        document.getElementById("btSubmit").disabled = True;
    }

    if (userFormDescription .value.length > 1 && userFormDescription .value.length <= 15) {
        userFormDescription .classList.add('is-valid');
        userFormDescription .classList.remove('is-invalid');
        
    } else {
        userFormDescription .classList.add('is-invalid');
        userFormDescription .classList.remove('is-valid');
        document.getElementById("btSubmit").disabled = True;
    }



    if (userFormAssigned .value.length > 0 && userFormAssigned .value.length <= 8) {
        userFormAssigned .classList.add('is-valid');
        userFormAssigned .classList.remove('is-invalid');
        
        
} 
    else {
        userFormAssigned .classList.add('is-invalid');
        userFormAssigned .classList.remove('is-valid');
        document.getElementById("btSubmit").disabled = True;
}

    if (userFormDueDate .value.length > 0) {
        userFormDueDate .classList.add('is-valid');
        userFormDueDate .classList.remove('is-invalid');
 } 
    else {
        userFormDueDate .classList.add('is-invalid');
        userFormDueDate .classList.remove('is-valid');
        document.getElementById("btSubmit").disabled = True;
}



    const TaskName = userFormName.value;
    const Description = userFormDescription.value;
    const AssignedTo = userFormAssigned.value;
    const DueDate = userFormDueDate.value;
    //const Status = userFormStatus.value;
  


    taskManager.addtask(TaskName, Description, AssignedTo, DueDate);
    taskManager.save();
    taskManager.render();
   

  
    userFormName.value = '';
    userFormDescription.value ='';
    userFormAssigned.value ='';
    userFormDueDate.value ='';
    document.getElementById("nameSpanId").innerHTML=" ";
    document.getElementById("desSpanId").innerHTML=" ";
    document.getElementById("assiSpanId").innerHTML=" ";
    document.getElementById("dateSpanId").innerHTML=" ";
    
    
    
});
  
    const taskList = document.querySelector('#taskList');
    taskList.addEventListener('click',(event) => { 
        if (event.target.classList.contains('done-button')) {
            const parentTask = event.target.parentElement;
            console.log(parentTask)
            const taskId = Number(parentTask.dataset.taskId);
            console.log(taskId)
            const task =  taskManager.getTaskById(taskId);
            task.Status = "Done";

            taskManager.save();
            taskManager.render();
           
            

        }
            
            if (event.target.classList.contains('delete-button')) {

                const parentTask = event.target.parentElement;

                const taskId = Number(parentTask.dataset.taskId);

                taskManager.deleteTask(taskId);
                taskManager.save();
                taskManager.render();

            }
       
});

