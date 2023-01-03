// Allows button to open/close the modal
const modal = document.getElementById("modal");
const button = document.getElementById("addcard");
const closeButton = document.getElementById("close-btn");

button.onclick = function () {
  modal.style.visibility = "visible";
};

closeButton.onclick = function () {
  modal.style.visibility = "hidden";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
  }
};

////////////////////////////////Validate Form Input////////////////////////////////////////
function validFormFieldInput(data) {
 const taskNameInput = document.querySelector("#task");
 const name = taskNameInput.value;


 const descriptionInput = document.querySelector("#description");
 const description = descriptionInput.value;


 const dateInput = document.querySelector("#date");
 const date = dateInput.value;


 const assignInput = document.querySelector("#assign");
 const assignedTo = assignInput.value;


 const statusInput = document.querySelector("#status");
 const status = statusInput.value;


 
};

const taskManager = new TaskManager();
taskManager.addTask('Ava', 'do the laundry', 'just do it', '2022-12-23', 'TODO');
taskManager.addTask('Ava', 'do the laundry', 'just do it', '2022-12-23', 'TODO');
taskManager.addTask('Ava', 'do the laundry', 'just do it', '2022-12-23', 'TODO');
console.log(taskManager.tasks);

const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    //Prevent default submit event
    event.preventDefault();
    validFormFieldInput(data);

    taskManager.addTask(name, description, assignedTo, dueDate, status);
    

    name = '';
    description = "";
    assignedTo = "";
    status = "";
    date = '';

})
