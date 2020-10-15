
const task2 = new taskManager(0);
task2.load();

task2.render();
const form = document.querySelector('#form');


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
document.getElementById("date-validation").setAttribute('min', today);

//let  x= document.querySelector('exampleFormControlInput1') 


 //x.addEventListener ('click',  (event) => { 
  //   event.target.

 //}

//(0[1-9]|1[0-9]|2[0-9]|3[01]).(0[1-9]|1[012]).[0-9]{4} < use this for pattern test
//let regTest = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/g;

 form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    //const NewTaskNameInput = document.querySelector('#name-validation');
    //const NewTaskDescription = document.querySelector('#description-validation');
    //const NewTaskAssignedTo = document.querySelector('#assigned-validation');
    //const NewTaskDueDate = document.querySelector('#date-validation');

    let nameForm = document.querySelector('#name-form');
    let nameValidation = document.querySelector('#name-validation');
    let descriptionForm = document.querySelector('#description-form');
    let descriptionValidation = document.querySelector('#description-validation');
    let assignedForm = document.querySelector('#assigned-form');
    let assignedValidation = document.querySelector('#assigned-validation');
    let dateForm = document.querySelector('#date-form');
    let dateValidation = document.querySelector('#date-validation');
    let statusForm = document.querySelector('#status-form');
    let statusValidation = document.querySelector('#status-validation');

    const name = nameValidation.value;
    const description = descriptionValidation.value;
    const assignedTo = assignedValidation.value;
    const dueDate = dateValidation.value;
    const status = statusValidation.value;
  
    
   

    if (nameValidation .value.length > 3 && nameValidation.value.length <= 15)   {      
        nameValidation.classList.add('is-valid');
        nameValidation.classList.remove('is-invalid');
       
      } else{
        
        nameValidation.classList.add('is-invalid');
        nameValidation.classList.remove('is-valid');
        document.getElementById("form-submission").disabled = True;
      }


      if (descriptionValidation.value.length > 5 && descriptionValidation.value.length <= 30) {

        descriptionValidation.classList.add('is-valid');
        descriptionValidation.classList.remove('is-invalid');

      } else {
        descriptionValidation.classList.add('is-invalid');
        descriptionValidation.classList.remove('is-valid');
        document.getElementById("form-submission").disabled = True;
      }

      if (assignedValidation.value.length > 3 && assignedValidation.value.length <= 15) {
        assignedValidation.classList.add('is-valid');
        assignedValidation.classList.remove('is-invalid');
      } else {
        assignedValidation.classList.add('is-invalid');
        assignedValidation.classList.remove('is-valid');
        document.getElementById("form-submission").disabled = True;
      }
      

      if (dateValidation.value.length > 1) {
        dateValidation.classList.add('is-valid');
        dateValidation.classList.remove('is-invalid');
      } else {
        dateValidation.classList.add('is-invalid'); 
        dateValidation.classList.remove('is-valid');
        document.getElementById("form-submission").disabled = True;
      }

      if (statusValidation.value.length > 0) {
        statusValidation.classList.add('is-valid');
        statusValidation.classList.remove('is-invalid');
      } else {
        statusValidation.classList.add('is-invalid'); 
        statusValidation.classList.remove('is-valid');
        document.getElementById("form-submission").disabled = True;
      }

      task2.addTask(name, description, assignedTo, dueDate,status); // removed status
      task2.save();
      task2.load();
      task2.render();
      
      
          nameValidation.value = '';
          descriptionValidation.value ='';
          assignedValidation.value='';
          dateValidation.value='';
          
       



    document.getElementById("nameSpanId").innerHTML=" ";
    document.getElementById("desSpanId").innerHTML=" ";
    document.getElementById("assiSpanId").innerHTML=" ";
    document.getElementById("dateSpanId").innerHTML=" ";
  

});

const renderThis = document.querySelector('#renderThis');

renderThis.addEventListener('click', (event) => {
  
     if(event.target.classList.contains('done-button')) {
      const parentTask = event.target.parentElement;
       console.log(parentTask);
       const taskId = Number(parentTask.dataset.taskId);
       const task = task2.getTaskById(taskId);
       task.status = 'DONE';
       task2.save();
       task2.render();
       
       
       
     } 
     if(event.target.classList.contains('delete-button')){
       const parentTask  = event.target.parentElement;
       const taskId = Number(parentTask.dataset.taskId);
       task2.deleteTask(taskId)
       task2.save();
       task2.render();
     }
});


const myCollapseBtn =()=>  {
  let x = document.getElementById("x")
  let y = document.getElementById("x1")

  if (x.innerHTML === "Collapse") {
    x.innerHTML = "Show List!",y.innerHTML = "Show List!" ;
  } else {
    x.innerHTML = "Collapse",y.innerHTML = "Collapse";
  }
}


//task manager functions below 

/* let tasks = []; 
let taskManager = [];
let task = [{ ID:1,
            Name:'David',
            Description:'The data base needs to be updated',
            AssignedTo:'Billy',
            DueDate:12/12/2020,
            Status:'TODO'
            },
            { ID:2,
            Name:'Bill Gates',
            Description:'New website',
            AssignedTo:'Rachel',
            DueDate:1/11/2020,
            Status:'REVIEW'
            }];


taskManager.addTask = (para) => { 
    for( let i in task) {
    if (task.hasOwnProperty(i)) { 
        tasks.push(task[i])
    }
         
    }
}

taskManager.addTask(task)   // pushes whats in the task array to tasks empty array 




taskManager.getTasksWithStatus = (status) => { 
     for( let i = 0; i < tasks.length; i++)
           if( status[i] === tasks[i]) { 
               console.log(tasks)
           }

}

taskManager.getTasksWithStatus('TODO'); // console logs ' yes its in here ' if a status ( TODO in this case ) is in the tasks array. need to return a result. 
 



taskManager.deleteTask = () => { 

    for( let i = 0; i < taskManager.length; i++)
            taskManager.splice(0,5)

}

taskManager.deleteTask();   // this deletes all tasks ( we have 5 items to add to a task, we use splice to remove 5 items)




taskManager.getAllTasks = () => { 

return tasks;
}

taskManager.getAllTasks();


taskManager.updateTask = (taskid, status) => { 
    for(let i =0; i < tasks.length; i++)
       if(taskid && status == tasks[i]) { 
           console.log('also here')
       }

}

taskManager.updateTask(1, 'TODO');


taskManager.assignTask = (taskid, assinee) => { 
     for(let i =0; i < tasks.length; i++)
        if(taskid  === tasks[i]) { 
            [console.log('yuppers')]
        }

}

taskManager.assignTask(1, 'Billy'); /* df*/

