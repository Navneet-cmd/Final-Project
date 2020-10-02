
const userForm = document.querySelector('#userForm');
const userFormDescription  = document.querySelector('#Description');
const userFormName  = document.querySelector('#name');
const userFormAssigned  = document.querySelector('#Assigned');
const userFormDueDate  = document.querySelector('#DueDate');
const userFormStatus = document.querySelector('#Status')

let today = new Date();
today.setHours(0,0,0,0);



d=new Date(document.getElementById("DueDate").value);
duedate=d.getDate();
mn=d.getMonth();
mn++;
yy=d.getFullYear();
document.getElementById("ndt").value=dt+"/"+mn+"/"+yy
document.getElementById("ndt").hidden=false;
document.getElementById("dt").hidden=true;
}



userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (userFormDescription .value.length > 0 && userFormDescription .value.length <= 15) {
        userFormDescription .classList.add('is-valid');
        userFormDescription .classList.remove('is-invalid');
    } else {
        userFormDescription .classList.add('is-invalid');
        userFormDescription .classList.remove('is-valid');
   }

   if (userFormName .value.length > 0 && userFormDescription .value.length <= 8) {
        userFormName .classList.add('is-valid');
        userFormName .classList.remove('is-invalid');
} 
    else {
        userFormName .classList.add('is-invalid');
        userFormName .classList.remove('is-valid');
}
    if (userFormAssigned .value.length > 0 && userFormDescription .value.length <= 8) {
        userFormAssigned .classList.add('is-valid');
        userFormAssigned .classList.remove('is-invalid');
} 
    else {
        userFormAssigned .classList.add('is-invalid');
        userFormAssigned .classList.remove('is-valid');
}

    if (userFormDueDate .value.length > 0) {
        userFormDueDate .classList.add('is-valid');
        userFormDueDate .classList.remove('is-invalid');
} 
    else {
        userFormDueDate .classList.add('is-invalid');
        userFormDueDate .classList.remove('is-valid');
}

    if (userFormStatus .value.length !== 0) {
        userFormStatus .classList.add('is-valid');
        userFormStatus .classList.remove('is-invalid');
} 
    else {
        userFormStatus .classList.add('is-invalid');
        userFormStatus .classList.remove('is-valid');
}

});


