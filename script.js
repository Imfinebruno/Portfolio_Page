const menuLinks = document.querySelectorAll(".nav a[href^='#']");



function getDistanceFromTheTop(element){
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

// function nativeScroll(DistanceFromTheTop){
//     window.scroll({
//         top: DistanceFromTheTop,
//         behavior: "smooth"
//     })
// }

function scrollToSection(event){
    event.preventDefault();
    const DistanceFromTheTop = getDistanceFromTheTop(event.target);
    smoothScrollTo(0, DistanceFromTheTop, 100)
};


menuLinks.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
});



//FUNÇÃO PRONTA PARA SETAR TEMPO DE DURAÇÃO

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== "undefined" ? duration : 400;
  
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60);
  }


// class MobileNavBar {
//   constructor(mobileMenu, navList, navLinks) {
//     this.mobileMenu = document.querySelector(mobileMenu);
//     this.navList = document.querySelector(navList);
//     this.navLinks = document.querySelectorAll(navLinks);
//     this.activeClass = "active";

//     this.handleClick = this.handleClick.bind(this);
//   }


//   animateLinks(){
//     this.navLinks.forEach((link, index)=>{
//       link.style.animation
//       ? (link.style.animation = " ")
//       : (link.style.animation = `navLinkFade 0.5s ease backwards 0.3s`);
//     })
//   }
//   handleClick () {
//     this.navList.classList.toggle(this.activeClass);
//     this.mobileMenu.classList.toggle(this.activeClass);
//     this.animateLinks();
//   }

//   addClickEvent(){
//     this.mobileMenu.addEventListener('click', this.handleClick);
//   }

//   init(){
//     if(this.mobileMenu){
//       this.addClickEvent();
//     } return this
//   }
// }

// const mobileNavBar = new MobileNavBar(
//   ".mobile-menu",
//   ".nav",
//   ".nav li"
// );

// mobileNavBar.init();

const menu = document.querySelector('.mobile-menu');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav li');


//ANIMAÇÃO LINKS
function animateLinks(){
  navLinks.forEach((link, index)=>{
    link.style.animation
    ? (link.style.animation = " ")
    : (link.style.animation = `show 0.5s ease backwards 0.3s`);
  })
}

//FUNÇÃO DE CLICK NO MENU
function handleMenu(){
  menu.classList.toggle('active');
  nav.classList.toggle('active');
  animateLinks();
}

menu.addEventListener('click', handleMenu);
