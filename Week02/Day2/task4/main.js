import { addTaskAsync, listTasks, deleteTask } from "./taskManager.js";

const run = async () => {
  console.log(await addTaskAsync("Learn JavaScript"));
  console.log(await addTaskAsync("Practice ES6"));
  
  console.log(listTasks());

  console.log(deleteTask(0));
  console.log(listTasks());
};

run();