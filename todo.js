document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("add-task");
    const pendingTasksList = document.getElementById("pending-tasks");
    const completedTasksList = document.getElementById("completed-tasks");

    // Add a new task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;

        // Handle task completion
        const completeButton = listItem.querySelector(".complete-button");
        completeButton.addEventListener("click", function () {
            listItem.classList.toggle("completed");
            listItem.querySelector(".complete-button").textContent = listItem.classList.contains("completed") ? "Undo" : "Complete";
            const targetList = listItem.classList.contains("completed") ? completedTasksList : pendingTasksList;
            targetList.appendChild(listItem);
        });

        // Handle task deletion
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove();
        });

        pendingTasksList.appendChild(listItem);
        taskInput.value = "";
    });

    // Press Enter to add a task
    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addTaskButton.click();
        }
    });
});
