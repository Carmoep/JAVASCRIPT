// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.querySelector('#grocery') //input id
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container') //output
const list = document.querySelector('.grocery-list') //output
const clarBtn = document.querySelector('.clear-btn')
// edit option
let editEl
let editFlag = false //defaut
let editId = ""

// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem)
//clear items
clarBtn.addEventListener('click', clearItems)
//const deleteBtn = document.querySelector('.delete-btn')
//console.log(deleteBtn); sem acesso vai dar null
//load items
window.addEventListener('DOMContentLoaded', setupItems)

// ****** FUNCTIONS **********
function addItem(e) {
    e.preventDefault()
    //console.log(grocery.value);
    const value = grocery.value
    //cheat to crate uniques ids
    const id = new Date().getTime().toString()
    //console.log(id);
    if(value && !editFlag) { //if value is true and editFlag false
        //console.log('add item to the list');
        createListItem(id, value)
        //display alert
        displayAlert('item added to the list', 'success')
        //show container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id, value)
        setBackToDefaut()
    } else if(value && editFlag) {
        //console.log('editing');
        editEl.innerHTML = value
        displayAlert('value changed', 'success')
        //edit local storage
        editLocalStorage(editId, value)
        setBackToDefaut()
    } else {
        //console.log('empty value');
        //alert.textContent = 'empty value'
        //alert.classList.add('alert-danger')
        displayAlert('please enter value', 'danger')
    }
}
//display alert ao invés do else fazer function 
function displayAlert(text, action) {
    //console.log('empty value');
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    //remove alert
    setTimeout(() => {
        alert.textContent = ''
        alert.classList.remove(`alert-${action}`)
    }, 1000)
}
//clear items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item')
    if(items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item)
        });
    }
    container.classList.remove('show-container')
    displayAlert('empty list', 'danger')
    setBackToDefaut()
    localStorage.removeItem('list')
}
//delete function
function deleteItem(e) {
    //console.log('item deleted');
    const element = e.currentTarget.parentElement.parentElement//grocery-item
    const id = element.dataset.id
    list.removeChild(element)
    if(list.children.length === 0) {
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefaut()
    //remove from local storage
    removeFromLocalStorage(id)
}
//edit function
function editItem(e) {
    //console.log('edit item');
    const element = e.currentTarget.parentElement.parentElement//grocery-item
    //set edit item - acessando .item
    editEl = e.currentTarget.parentElement.previousElementSibling
    //set form value
    grocery.value = editEl.innerHTML
    editFlag = true
    editId = element.dataset.id
    submitBtn.textContent = 'edit'
}
//set back to defaut
function setBackToDefaut() {
    //console.log('set back to defaut');
    grocery.value = ''
    editFlag = false
    editId.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
   //console.log('added to local storage');
   //parâmetro mesmo nome que propriedade pode abreviar
   const grocery = (id, value)// = id: id, value: value
   let items = getLocalStoage()
   //console.log(grocery);
   items.push(grocery)
   localStorage.setItem('list', JSON.stringify(items))
   //console.log(items);  
}
function removeFromLocalStorage(id) { //data-set
    let items = getLocalStoage()
    items = items.filter((item) => {
        if(item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function editLocalStorage(id, value) {
    let items = getLocalStoage()
    items = items.map((item) => {
        if(item.id === id) {
            item.value = value
        }
        return item
    })
    localStorage.setItem('list', JSON.stringify(items))
}
function getLocalStoage() { //função de acesso ao array
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : []
}
//localStorage API
//setItem
//getItem
//removeItem
//save as a string
//localStorage.setItem('orange', JSON.stringify(['item1', 'item2']))
//const oranges = JSON.parse(localStorage.getItem('orange'))
//console.log(oranges);
//localStorage.removeItem('orange')

// ****** SETUP ITEMS **********
function setupItems() {
    let items = getLocalStoage()
    if(items.length > 0) {
        items.forEach((item) => {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}
function createListItem (id, value) {
    const element = document.createElement('article')
    //add class
    element.classList.add('grocery-item')
    //add id
    const atrbt = document.createAttribute('data-id')
    atrbt.value = id
    element.setAttributeNode(atrbt)
    element.innerHTML = `<p class="title">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
    </div>`
    const deleteBtn = element.querySelector('.delete-btn')//acces
    const editBtn = element.querySelector('.edit-btn')//access
    deleteBtn.addEventListener('click', deleteItem)
    editBtn.addEventListener('click', editItem)
    // append child list
    list.appendChild(element)
}