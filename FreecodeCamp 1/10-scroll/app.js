// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in px

// ********** set date ************
const date = document.querySelector('#date')
date.innerHTML = new Date().getFullYear()
// ********** close links ************
const navToggle = document.querySelector('.nav-toggle')
const linksCont = document.querySelector('.links-container')
const links = document.querySelector('.links')

navToggle.addEventListener('click', () => {
    //linksCont.classList.toggle('show-links') - not dinamic data
    const contHeight = linksCont.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height
    if(contHeight === 0){
        linksCont.style.height = `${linksHeight}px`
    } else {
        linksCont.style.height = 0
    }
})
const navBar = document.getElementById('nav')
const topLink = document.querySelector('.top-link') //está no css
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if(scrollHeight > navHeight) {
        navBar.classList.add('fixed-nav') //está no css
    } else {
        navBar.classList.remove('fixed-nav')
    }
    //setup back to top link
    if(scrollHeight > 500) {
        topLink.classList.add('show-link')
    } else {
        topLink.classList.remove('show-link')
    }
})
// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        //prevent defaut
        e.preventDefault()
        //navigate to especific spot
        const id = e.currentTarget.getAttribute('href').slice(1)
        const element = document.getElementById(id)
        //console.log(id);
        //console.log(position);
        //calculate the heights
        const navHeight = navBar.getBoundingClientRect().height
        const contHeight = linksCont.getBoundingClientRect().height
        const fixedNav = navBar.classList.contains('fixed-nav')
        let position = element.offsetTop - navHeight
        if(!fixedNav) {//por isso o let pro position
            position = position - navHeight
        }
        if(navHeight > 82) {
            position = position + contHeight
        }
        //fixing the position
        window.scrollTo({ left:0, top: position,})
        linksCont.style.height = 0
    })
})
