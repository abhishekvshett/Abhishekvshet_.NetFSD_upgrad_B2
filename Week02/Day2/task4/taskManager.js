let tasks = [];

// // =====================
// // 1️⃣ CALLBACK VERSION
// // =====================

// export const addTaskCallback = (task, callback) => {
//   setTimeout(() => {
//     tasks.push(task);
//     callback(`Task "${task}" added.`);
//   }, 1000);
// };

// // =====================
// // 2️⃣ PROMISE VERSION
// // =====================

export const addTaskPromise = (task) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      tasks.push(task);
      resolve(`Task "${task}" added.`);
    }, 1000);
  });
};

// =====================
// 3️⃣ ASYNC/AWAIT VERSION
// =====================

export const addTaskAsync = async (task) => {
  const message = await addTaskPromise(task);
  return message;
};

export const listTasks = () => {
  return `
  ===== Task List =====
  ${tasks.map((task, index) => `${index + 1}. ${task}`).join("\n")}
  `;
};

export const deleteTask = (index) => {
  if (index >= 0 && index < tasks.length) {
    const removed = tasks.splice(index, 1);
    return `Task "${removed[0]}" deleted.`;
  }
  return "Invalid index.";
};