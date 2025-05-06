const tasks = [];

function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();

    if (taskText === '') return;

    tasks.push(taskText);
    console.log(tasks);  
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        li.classList.toggle('completed');
    };
    checkbox.className = 'check';
    checkbox.onclick = () => li.classList.toggle('completed');
    const span = document.createElement('span');
    span.className = 'text';
    span.textContent = taskText;

    span.onclick = function () {
        const currentText = span.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = currentText;
        span.innerHTML = '';
        span.appendChild(inputField);
        inputField.focus();

        inputField.onblur = function () {
            const updatedText = inputField.value.trim();
            span.textContent = updatedText || currentText;
        };
        inputField.onkeydown = function (event) {
            if (event.key === 'Enter') inputField.onblur();
        };
    };

    const delBtn = document.createElement('button');
    delBtn.textContent = 'x';
    delBtn.className = 'delete-btn';
    delBtn.style.cursor = 'pointer';
    delBtn.onclick = () => li.remove();

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);
    input.value = '';
}