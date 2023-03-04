const createTaskHtml = (name, description, assignedTo, dueDate, status, id) => {
  const taskHtml = `<li class="list-item" id="list-item" data-task-id="${id}">
  <div class="card" id="card">
    <div class="card-head">
      <h3 class="task-name">${name}</h3>
    </div>
    <div class="card-body">
      <p class="description">${description}</p>
      <p class="assignment">${assignedTo}</p>
      <p class="date">${dueDate}</p>
      <p class="status">${status}</p>
      <div class="buttons">
          <button class="doneBtn">Done</button>
          <button class="deleteBtn">Delete</button>
      </div>
    </div>
  </div>
</li>`;
  return taskHtml;
};

class TaskManager {
  constructor(currentId = 0) {
    this.tasks = [];
    this.currentId = currentId;
    
  }

  addTask(name, description, assignedTo, dueDate) {
    this.currentId++;
    const task = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: "TODO"
    };
    this.tasks.push(task);
    return task;
  }

  render() {
    let tasksHtmlList = [];
    for (let task of this.tasks) {
      let date = new Date(task.dueDate);
      let formattedDate = date.toDateString();
      let taskHtml = createTaskHtml(
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status,
        task.id
      ); 
      tasksHtmlList.push(taskHtml);
    }
    let tasksHtml = tasksHtmlList.join("\n");
    let tasksList = document.getElementById("list-group");
    tasksList.innerHTML = tasksHtml;
  }

  getTaskById(taskId) {
    let foundTask; 
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id === taskId) {
        foundTask = task;
        break;
      }
    }
    return foundTask;
  }

  save() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem('tasks', tasksJson);
    const currentId = JSON.stringify(this.currentId);
    localStorage.setItem('currentId', currentId);
  }

  load () {
    if (localStorage.getItem('tasks')) {
      const tasksJson = localStorage.getItem('tasks');
      this.tasks = JSON.parse(tasksJson);
    }

   if (localStorage.getItem('currentId')) {
     const currentId = localStorage.getItem('currentId');
     this.currentId = Number(currentId);
    }

  }

  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {
      const task = this.tasks[i];
      if (task.id != taskId) {
        newTasks.push(task)
      }
      this.tasks = newTasks;
    }
  }
}
