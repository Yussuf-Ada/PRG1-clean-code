let tasksList = []; 

function addingNewTasks(taskName, taskDue) {
  let task = { name: taskName, due: taskDue, completed: false };
  tasksList.push(task);
}

function searchingForTask(taskName) {
  tasksList = tasksList.filter(taskName => taskName.name !== taskName);
}

function displayAllTask() {
  console.log("All Tasks:");
  tasksList.forEach(task => {
    console.log(`Task: ${task.name}, Due: ${task.due}, Completed: ${task.completed}`);
  });
}

function completeTask(tName) {
  let taskIndex = tasksList.findIndex(task => task.name === tName);
  if (taskIndex !== -1) {
    tasksList[taskIndex].completed = true;
  } else {
    console.log("Task not found.");
  }
}


addingNewTasks("Fix bug in code", "2024-02-21");
addingNewTasks("Update documentation", "2024-02-22");
displayAllTask();
searchingForTask("Fix bug in code");
completeTask("Update documentation");
