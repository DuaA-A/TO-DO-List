
function addTask() {
    const taskText = document.getElementById('taskInput').value.trim();
    if (taskText === '') return;

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.onclick = function () {
        li.classList.toggle('completed');
    };
    checkbox.className = 'check';

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
            if (updatedText !== '')
                span.textContent = updatedText;
            else 
                span.textContent = currentText;
        };
        inputField.onkeydown = function (event) {
            if (event.key === 'Enter') {
                inputField.onblur();
            }
        };
    };

    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'x';
    delBtn.className = 'delete-btn';
    delBtn.onclick = function () {
        li.remove();
    };
    delBtn.style.cursor="pointer";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
}