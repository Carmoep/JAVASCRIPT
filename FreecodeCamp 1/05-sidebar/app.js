const toggleEl = document.querySelector('.sidebar-toggle') 
const sidebarEl = document.querySelector('.sidebar')
const closeBtnEl = document.querySelector('.close-btn')
 
toggleEl.addEventListener('click', () => {
    console.log(sidebarEl.classList);
    //if(sidebarEl.classList.contains('show-sidebar')) {
    //    sidebarEl.classList.remove('show-sidebar')
    //} else {
    //    sidebarEl.classList.add('show-sidebar')
    //}
    sidebarEl.classList.toggle('show-sidebar')
})
closeBtnEl.addEventListener('click', () => {
    sidebarEl.classList.remove('show-sidebar')
})