const navMenu = document.getElementById('nav-menu'),
    navToggle  = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close'); // แก้ Document เป็น document

if (navToggle) {
    navToggle.addEventListener('click', () => { // แก้ clic เป็น click
        navMenu.classList.add('show-menu');
    });
}
if (navClose) {
    navClose.addEventListener('click', () => { // เพิ่ม {} ให้ฟังก์ชันลูกศร
        navMenu.classList.remove('show-menu');
    });
}



/* remove menu mobile */
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))



/* -------------------------------- */
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*----------------------------------*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*----------------------------------*/
const section =document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYoffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active-links')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active-links')
        }
    }) 
}
window.addEventListener('scroll',scrollActive)
/*----------------------------------*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home_header, .section_title`,{delay: 600})
sr.reveal(`.home_footer`,{delay: 700})
sr.reveal(`.home_img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor_img, .products_card, .footer_logo, .footer_content, .footer_copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs_data, .discount_animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs_img, .discount_img`,{origin: 'right'})
sr.reveal(`.case_img`,{origin: 'top'})
sr.reveal(`.case_data`)



