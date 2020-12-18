/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const NAVbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// build the nav , add items to navbar 

function Build () {

    // container wil be used to add each element on the navbar 
    let container = '';

    //defining a function that will take a section parameter for each one exist on the html
    sections.forEach(section => {

        // getting the id for the section from html
        const ID = section.id;
        // getting the data associated with it data-nav
        const dataNav = section.dataset.nav;

        // adding each li > a element to the container 
        container += `<li><a href= "#${ID}"class="menu__link">${dataNav}</li></a>`
    });

    // to insert the html elements/tags declared above  >  .innerHTML property 
    NAVbar.innerHTML=container;
   
};




 
//round the number to its largest by floor 
const clientViewPort = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

// adding the your-active-class to the active section 
const addSecToActiveState = (view, section) => {
    if(view){
        section.classList.add('active__class');
        ID = section.id.slice(7,8) -1;
        NAVbar.childNodes[ID].style.cssText ="background:linear-gradient(0deg, rgba(218, 138, 20, 0.973) 0%, rgba(212, 49, 144, 0.849) 100%);";
    };
};

// remove the your-active-class from other sections
const removeSecfActiveState = (section) => {

    section.classList.remove('active__class');
    //slice the number of the id from 'section1' to only have it by numbers 1,2,3 
    ID = section.id.slice(7,8) -1;

    // set the background of the navbar items while they are not active to white
    NAVbar.childNodes[ID].style.cssText ="background-color:white;";
};



// setting the active state to sections 

const ActiveState = function(){
    //looping through each section
    sections.forEach(function(section){
        //passing the section to clientViewPort which get the client viewport
        const Viewele = clientViewPort(section);
        // check the view of section if its 
        sectionView = () => Viewele < 300 && Viewele >= -300;

        removeSecfActiveState(section);
        //  set active state to section 
        addSecToActiveState(sectionView(),section);
    });
};


// scrolling to section 
function scrollingEvent(event) {
    NAVbar.querySelectorAll('a[href^="#"]').forEach(function(anchor){
      event.preventDefault();
      if (anchor === event.target) {
        document.querySelector(event.target.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
          block: 'start'

        });
      }
    })
  }

/**
 * End Helper Functions
 * 
*/

Build();
window.addEventListener('scroll' ,ActiveState);
NAVbar.addEventListener('click', scrollingEvent);

