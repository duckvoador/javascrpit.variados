//criei a entrada do form de digitação a se manipulada
const form = document.getElementById('task-form');
//criei a var que manipula as task a seres listadas
const taskList = document.getElementById('tasks');
//aqui o botão adicionar he relacionado a funçao
form.onsubmit = function (e) {
    e.preventDefault ();
    const inputFild = document.getElementById('task-input');
    addTask(inputFild.value);
    form.reset();
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescripitionNode = document.createTextNode('descripition');

    newTask.setAttribute('type', 'chekbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.setAttribute('name', description);

    taskContainer.classList.add('task-item');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);
}

