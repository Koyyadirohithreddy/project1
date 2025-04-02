document.addEventListener("DOMContentLoaded", function () {
    const taskStack = [];
    const processLine = document.getElementById("processLine");
    
    window.addTask = function () {
        const taskInput = document.getElementById("taskInput").value;
        if (taskInput) {
            taskStack.push(taskInput);
            updateProcessLine();
        } else {
            alert("Please enter a task name.");
        }
    };

    window.undoTask = function () {
        if (taskStack.length > 0) {
            taskStack.pop();
            updateProcessLine();
        } else {
            alert("No tasks to undo.");
        }
    };

    function updateProcessLine() {
        processLine.textContent = taskStack.join(" -> ");
    }
});
