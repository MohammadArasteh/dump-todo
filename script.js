let addNewListBtn = document.getElementById('add-button')
addNewListBtn.onclick = createNewList

let list_id = 0;
let item_id = 0;

function createNewList() {
    let parent = document.getElementById('lists-container')
    let title = prompt('enter list title')
    if(title == null || title.match("^\\s+$") || title == '') return

    let list = document.createElement('div')
    list.classList.add('todo-list-container')
    list.id = `list-${list_id++}`

    let list_title = document.createElement('div')
    list_title.classList.add('todo-list-title')
    let list_title_span = document.createElement('span')
    list_title_span.textContent = title
    list_title.appendChild(list_title_span)

    let addItemContainer = document.createElement('div')
    addItemContainer.classList.add('add-item-section')
    let addItemBtn = document.createElement('button')
    addItemBtn.classList.add('add-item-button')
    addItemBtn.textContent = 'Add Task'
    addItemBtn.addEventListener('click', () => {
        createTask(list.id)
    })
    addItemContainer.appendChild(addItemBtn)

    let tasksContainer = document.createElement('div')
    tasksContainer.classList.add('todo-list-items')

    let deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete-list-button')
    deleteBtn.textContent = 'DELETE'
    deleteBtn.addEventListener('click', () => {
        deleteList(list.id)
    })

    
    list.appendChild(list_title)
    list.appendChild(addItemContainer)
    list.appendChild(tasksContainer)
    list.appendChild(deleteBtn)
    parent.appendChild(list)
}
function createTask(list_id) {
    let task_name = prompt('enter task name')
    let tasks_list = document.getElementById(list_id).getElementsByClassName('todo-list-items')[0]

    let task = document.createElement('div')
    task.classList.add('todo-item')

    let checkBox = document.createElement('input')
    checkBox.type = 'checkbox'
    checkBox.classList.add('checkbox')
    checkBox.id = `item-${item_id++}`

    let label = document.createElement('label')
    label.classList.add('todo-item-label')
    label.setAttribute('for',checkBox.id)

    let span = document.createElement('span')
    span.textContent = task_name

    label.appendChild(span)
    task.append(checkBox)
    task.appendChild(label)
    tasks_list.appendChild(task)
}
function deleteList(list_id) {
    let confirmation = confirm('are you sure ?')
    if(confirmation) {
        let parent = document.getElementById('lists-container')
        let child = document.getElementById(list_id)
        parent.removeChild(child)
    }
}