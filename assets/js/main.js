const taskManager = new TaskManager();
const error = document.getElementById('error');
const taskHtml = createTaskHtml();
taskManager.load();
taskManager.render();



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
function validFormFieldInput() {
  const taskNameInput = document.querySelector('#task');
  const name = taskNameInput.value;
  

  const taskDescriptionInput = document.querySelector('#description');
  const description = taskDescriptionInput.value;
  

  const assignedToInput = document.querySelector('#assign');
  const assignedTo = assignedToInput.value;
 
  const dueDateInput = document.querySelector('#date');
  const dueDate = dueDateInput.value;
 
  const statusInput = document.querySelector('#status');
  const status = statusInput.value;
  

  if (!name || !description || !assignedTo || !dueDate || !status) {
    error.style.display = "block";
    return false;
  }
  error.style.display = 'none';
  return true;
}

//////////////////////////////Adding Tasks with the Form//////////////////////////////////
const form = document.querySelector('#form');

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  if (!validFormFieldInput()) {
    return;
  }
  const taskNameInput = document.querySelector('#task');
  const name = taskNameInput.value;

  const taskDescriptionInput = document.querySelector('#description');
  const description = taskDescriptionInput.value;

  const assignedToInput = document.querySelector('#assign');
  const assignedTo = assignedToInput.value;

  const dueDateInput = document.querySelector('#date');
  const dueDate = dueDateInput.value;

  const statusInput = document.querySelector('#status');
  const status = statusInput.value;
  
  taskManager.addTask(name, description, assignedTo, dueDate, status);
  taskManager.render();
  taskManager.save();
  taskNameInput.value = '';
  taskDescriptionInput.value = '';
  assignedToInput.value = '';
  dueDateInput.value = '';
});


////////////////////////////Change card status////////////////////////////////////////////
const taskList = document.querySelector('#list-group')

taskList.addEventListener('click', (event) => {
  if (event.target.classList.contains('doneBtn')) {
    const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.getAttribute('data-task-id'));
    const task = taskManager.getTaskById(taskId);
    task.status = 'Done';

    //Move to the next column
    const nextColumn = document.querySelector('.completed-list-group')
    nextColumn.appendChild(parentTask);

    taskManager.render();

  }

  if (event.target.classList.contains('deleteBtn')) {
    const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    const taskId = Number(parentTask.getAttribute('data-task-id'));
    taskManager.deleteTask(taskId);
    taskManager.save();
    taskManager.render();
  }
});

const completedListGroup = document.querySelector('#completed-list-group');
completedListGroup.addEventListener('click', (event) => {
  if (event.target.classList.contains('deleteBtn')) {
    const parentTask = event.target.parentElement.parentElement.parentElement.parentElement;
    const nextColumn = document.querySelector('.completed-list-group');
    nextColumn.removeChild(parentTask);
  }
});



