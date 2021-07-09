/*=======MENU SHOW Y HIDDEN========= */
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


/*=======MENU SHOW========= */
/*Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () =>{
    navMenu.classList.add('show-menu')
  })
}


/*=======MENU  HIDDEN========= */
/*Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu')
  })
}


/*=======REMOVE MENU MOBILE========= */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  //when we click on__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*=======SCROLL SECTION ACTIVE LINK========= */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scroll = window.pageYOffset
}

/*=======ACCORDION SKILL========= */
const skillsContent = document.getElementsByClassName('skill__content'),
      skilsHeader = document.querySelectorAll('skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.getElementsByClassName

  for(i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close'
  }
  if(itemClass == 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open'
  }
}

    

/*=======QUALIFICATION TABS========= */