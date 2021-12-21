/* ======= Menu Show Y Hidden ====== */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/* ======= Menu Show ====== */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/* ======= Menu Hidden ====== */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/* ======= Remove Menu Mobile ====== */
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
/* ======= Accordion skills ====== */
const skillsContent = document.getElementsByClassName("skills_content"),
  skillsHeader = document.querySelector(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = 'skills__content skills__close';
  }
  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skillsHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/* ======= Qualification Tabs ====== */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/

/*==================== PORTFOLIO SWIPER  ====================*/

/*==================== TESTIMONIAL ====================*/

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset
// }

/*==================== CHANGE BACKGROUND HEADER ====================*/

/*==================== SHOW SCROLL UP ====================*/

/*==================== DARK LIGHT THEME ====================*/
