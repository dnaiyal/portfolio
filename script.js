
 
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navTooggle = document.getElementById('nav-tooggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navTooggle){
    navTooggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// ----------------ADD BLUR TO HEADER------------------

const blurHeader = () =>{
    const header = DocumentFragment.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header') 
} 
window.addEventListener('scroll',blurHeader)

// ========== EMAIL JS CONTACT ==========



const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

      const sendEmail = (e) =>{
        e.preventDefault ()
          // serviceID - templateID - #form - publicKey 
          emailjs.sendForm('service_my4g085', 'template_5wz9omq', '#contact-form', 'Db-noUpeuW9UINwao')
             .then(() =>{
            //show sent message 
            contactMessage.textContent = 'Message sent sucessfully ✅'
            setTimeout(() =>{
                contactMessage.textContent = ''
            }, 5000)
            //clear input fields
            contactForm.reset()
        }, () =>{
            //show error message
            contactMessage.textContent = 'Message not sent (service error)'
        })
      }
       
contactForm.addEventListener('submit', sendEmail)




// =================SCROLL REVAL ANIMATION================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true 
})

sr.reveal('.home-data, .home-social, .contact-container, .footer-container')
sr.reveal('.home-image', {origin: 'bottom'})
sr.reveal('.about-data, .skils-data', {origin: 'left'})
sr.reveal('.about-image, .skils-content', {origin: 'right'})
sr.reveal('.services-card, .projects-card', {interval: '100'})





















