let taskNameInput = document.querySelector('#input') ;
let addTuskButton = document.querySelector('#add') ;
let removeTaskButton = document.querySelector('#delete')
let taskList = document.querySelector('#zadachi'); 

addTuskButton.addEventListener('click' , addTuskHandler);
removeTaskButton.addEventListener('click' , removeTask);

function createTask(text) {
    let div = document.createElement('div');
    div.classList.add('task');

    let input = document.createElement('input');
    input.addEventListener('click' , changeTaskState);
    input.type = 'checkbox';

    let p = document.createElement('p');
    p.innerHTML = `Название задачи:  ${text}`;

    div.append(input);
    div.append(p);

    return div;
}

function changeTaskState() {
    if(this.checked) {
        this.parentElement.classList.add('completed');
        alert('Эта задача будет удалена')
        this.parentElement.remove();
    }else{
        this.parentElement.classList.remove('completed');
    }
}

function addTuskHandler() {
    let newTask = createTask(taskNameInput.value);
    taskList.append(newTask);
}

function removeTask() {
    alert('Все задачи удалены')
    taskList.remove()
}