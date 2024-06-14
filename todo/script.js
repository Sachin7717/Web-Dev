document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', removeTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        li.appendChild(removeBtn);

        taskList.appendChild(li);
        taskInput.value = '';
        taskInput.focus();
    }

    function removeTask(e) {
        if (e.target.tagName === 'BUTTON') {
            const li = e.target.parentElement;
            taskList.removeChild(li);
        }
    }
});
