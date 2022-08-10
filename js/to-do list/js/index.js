const list = (() => {
  const inpuTasks = document.querySelector(".input-tasks");
  const tasks = document.querySelector(".tasks");

  const createTag = (tag) => document.createElement(tag);

  const createTaks = (valueTask) => {
    const li = createTag("li");
    li.innerText = valueTask;
    tasks.appendChild(li);
    cleanInput();
    createButtonDelete(li);
    saveTasks();
  };

  const createButtonDelete = (li) => {
    li.innerText += " ";
    const btnDelete = createTag("button");
    btnDelete.innerText = "Apagar";
    btnDelete.setAttribute("class", "delete");
    btnDelete.setAttribute("title", "Apagar esta Tarefa");
    li.appendChild(btnDelete);
  };

  const cleanInput = () => {
    inpuTasks.value = "";
    inpuTasks.focus();
  };

  const saveTasks = () => {
    const liTasks = tasks.querySelectorAll("li");
    const taskList = [];

    for (let task of liTasks) {
      let taskText = task.innerText;
      taskText = taskText.replace("Apagar", "").trim();
      taskList.push(taskText);
    }

    const tasksJSON = JSON.stringify(taskList);
    localStorage.setItem("tasks", tasksJSON);
  };

  const getTasks = (() => {
    const tasks = localStorage.getItem("tasks");
    if(tasks == null)return;
    const taskList = JSON.parse(tasks);
    console.log(taskList)
    for (let task of taskList) {
      createTaks(task);
    }
  })();

  inpuTasks.addEventListener("keypress", (e) => {
    let textInput = inpuTasks.value;
    if (e.keyCode == 13) {
      if (!textInput) return;
      createTaks(textInput);
    }
  });

  document.addEventListener("click", (e) => {
    const el = e.target;
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
      saveTasks();
    }
    if (el.classList.contains("btn-tasks")) {
      let textInput = inpuTasks.value;
      if (!textInput) return;
      createTaks(textInput);
    }
  });
})();
