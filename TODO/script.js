document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const taskCount = document.getElementById("taskCount");
  const clearAllBtn = document.getElementById("clearAll");

  // Load tasks from localStorage
  let tasks = [];
  let editingIndex = -1;

  // Initialize tasks from localStorage
  function initializeTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      try {
        tasks = JSON.parse(savedTasks);
        updateTaskList();
      } catch (error) {
        console.error("Erro ao carregar tarefas:", error);
        tasks = [];
        localStorage.removeItem("tasks");
      }
    }
  }

  // Add task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      if (editingIndex === -1) {
        // Add new task
        tasks.push({
          text: taskText,
          completed: false,
          createdAt: new Date().toISOString(),
        });
      } else {
        // Update existing task
        tasks[editingIndex].text = taskText;
        tasks[editingIndex].updatedAt = new Date().toISOString();
        editingIndex = -1;
        addTaskBtn.textContent = "Adicionar";
      }
      taskInput.value = "";
      updateTaskList();
      saveTasks();
    }
  }

  // Update task list
  function updateTaskList() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.className = `task-item ${task.completed ? "completed" : ""}`;

      const leftContent = document.createElement("div");
      leftContent.className = "left-content";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.addEventListener("change", () => toggleTask(index));

      const span = document.createElement("span");
      span.textContent = task.text;

      const buttonsContainer = document.createElement("div");
      buttonsContainer.className = "buttons";

      const editBtn = document.createElement("button");
      editBtn.className = "edit-btn";
      editBtn.innerHTML = '<i class="fas fa-edit"></i>';
      editBtn.addEventListener("click", () => editTask(index));

      const deleteBtn = document.createElement("button");
      deleteBtn.className = "delete-btn";
      deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
      deleteBtn.addEventListener("click", () => deleteTask(index));

      buttonsContainer.appendChild(editBtn);
      buttonsContainer.appendChild(deleteBtn);

      leftContent.appendChild(checkbox);
      leftContent.appendChild(span);

      li.appendChild(leftContent);
      li.appendChild(buttonsContainer);
      taskList.appendChild(li);
    });

    updateTaskCount();
  }

  // Edit task
  function editTask(index) {
    taskInput.value = tasks[index].text;
    editingIndex = index;
    addTaskBtn.textContent = "Atualizar";
    taskInput.focus();
  }

  // Toggle task completion
  function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    tasks[index].updatedAt = new Date().toISOString();
    updateTaskList();
    saveTasks();
  }

  // Delete task
  function deleteTask(index) {
    tasks.splice(index, 1);
    if (editingIndex === index) {
      editingIndex = -1;
      addTaskBtn.textContent = "Adicionar";
      taskInput.value = "";
    }
    updateTaskList();
    saveTasks();
  }

  // Clear all tasks
  function clearAllTasks() {
    if (confirm("Tem certeza que deseja remover todas as tarefas?")) {
      tasks = [];
      editingIndex = -1;
      addTaskBtn.textContent = "Adicionar";
      taskInput.value = "";
      updateTaskList();
      saveTasks();
    }
  }

  // Update task count
  function updateTaskCount() {
    const remainingTasks = tasks.filter((task) => !task.completed).length;
    taskCount.textContent = `${remainingTasks} tarefa${
      remainingTasks !== 1 ? "s" : ""
    } restante${remainingTasks !== 1 ? "s" : ""}`;
  }

  // Save tasks to localStorage
  function saveTasks() {
    try {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    } catch (error) {
      console.error("Erro ao salvar tarefas:", error);
      alert(
        "Erro ao salvar as tarefas. O armazenamento local pode estar cheio."
      );
    }
  }

  // Event listeners
  addTaskBtn.addEventListener("click", addTask);
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });
  clearAllBtn.addEventListener("click", clearAllTasks);

  // Cancel edit when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".todo-app") && editingIndex !== -1) {
      editingIndex = -1;
      addTaskBtn.textContent = "Adicionar";
      taskInput.value = "";
    }
  });

  // Initialize the app
  initializeTasks();
});
