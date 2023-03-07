
// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector('.nav-toggle')
const linksEl = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    //console.log(linksEl.classList);
    //console.log(linksEl.classList.contains('random'));
    //console.log(linksEl.classList.contains('links'));
    //if (linksEl.classList.contains('show-links')) {
    //    linksEl.classList.remove('show-links')
    //} else {
    //    linksEl.classList.add('show-links')
    //}
    linksEl.classList.toggle('show-links')
})