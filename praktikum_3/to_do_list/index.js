document.getElementById('addBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const row = document.createElement('tr');

        const taskCell = document.createElement('td');
        taskCell.textContent = taskInput.value;
        row.appendChild(taskCell);

        const actionCell = document.createElement('td');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.className = 'action-button edit-button';
        editButton.addEventListener('click', () => editTask(taskCell));
        actionCell.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'action-button delete-button';
        deleteButton.addEventListener('click', () => row.remove());
        actionCell.appendChild(deleteButton);

        row.appendChild(actionCell);
        taskList.appendChild(row);

        taskInput.value = '';
    }
}

function editTask(taskCell) {
    const newTask = prompt('Edit the task:', taskCell.textContent);
    if (newTask !== null && newTask.trim() !== '') {
        taskCell.textContent = newTask;
    }
}
