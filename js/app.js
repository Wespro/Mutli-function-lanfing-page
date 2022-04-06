// /**
//  *
//  * Manipulating the DOM exercise.
//  * Exercise programmatically builds navigation,
//  * scrolls to anchors from navigation,
//  * and highlights section in viewport upon scrolling.
//  *
//  * Dependencies: None
//  *
//  * JS Version: ES2015/ES6
//  *
//  * JS Standard: ESlint
//  *
//  */





//navbar
//creating Variables
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("a");

const docFragment = document.createDocumentFragment();
const ulList = document.querySelector("#navbar__list");

//adding nav items (li) through a loop in a docment Fragment then appending it to ul-navbar + it's responsive to any section will be added in the future
for (let i = 1; i <= sections.length; i++) {
  const newLi = document.createElement("li");
  //added the inner html to li
  newLi.innerHTML = " <a href=" + "#" + "section" + i + " class = " + "menu__link" + " >" + "section " + i + "</a>";
  // newLi.classList.add("")
  docFragment.appendChild(newLi);

}
//adding the fragment into the ul of the navbar
ulList.appendChild(docFragment);




//highlights & scrooling smooth effect


document.querySelectorAll("a")[0].addEventListener("click", function() {
  // previnting the event default and adding smooth scrolling

  event.preventDefault();
  document.querySelector("#section1").scrollIntoView({
    behavior: "smooth"
  });


  document.querySelectorAll("a")[0].classList.add("active");

  document.querySelectorAll("a")[1].classList.remove("active");
  document.querySelectorAll("a")[2].classList.remove("active");
  document.querySelectorAll("a")[3].classList.remove("active");
  document.querySelectorAll("a")[4].classList.remove("active");

  //adding the hilight
  document.querySelector("#section1").classList.add("your-active-class");

  //removing the all other highlights
  document.querySelector("#section2").classList.remove("your-active-class");
  document.querySelector("#section3").classList.remove("your-active-class");
  document.querySelector("#section4").classList.remove("your-active-class");
  document.querySelector("#section5").classList.remove("your-active-class");

});



document.querySelectorAll("a")[1].addEventListener("click", function() {

  event.preventDefault();
  document.querySelector("#section2").scrollIntoView({
    behavior: "smooth"
  });



  document.querySelectorAll("a")[1].classList.add("active");

  document.querySelectorAll("a")[0].classList.remove("active");
  document.querySelectorAll("a")[2].classList.remove("active");
  document.querySelectorAll("a")[3].classList.remove("active");
  document.querySelectorAll("a")[4].classList.remove("active");

  document.querySelector("#section2").classList.add("your-active-class");


  document.querySelector("#section1").classList.remove("your-active-class");
  document.querySelector("#section3").classList.remove("your-active-class");
  document.querySelector("#section4").classList.remove("your-active-class");
  document.querySelector("#section5").classList.remove("your-active-class");

});

document.querySelectorAll("a")[2].addEventListener("click", function() {

  event.preventDefault();
  document.querySelector("#section3").scrollIntoView({
    behavior: "smooth"
  });

  document.querySelectorAll("a")[2].classList.add("active");

  document.querySelectorAll("a")[0].classList.remove("active");
  document.querySelectorAll("a")[1].classList.remove("active");
  document.querySelectorAll("a")[3].classList.remove("active");
  document.querySelectorAll("a")[4].classList.remove("active");

  document.querySelector("#section3").classList.add("your-active-class");

  document.querySelector("#section1").classList.remove("your-active-class");
  document.querySelector("#section2").classList.remove("your-active-class");
  document.querySelector("#section4").classList.remove("your-active-class");
  document.querySelector("#section5").classList.remove("your-active-class");


});

document.querySelectorAll("a")[3].addEventListener("click", function() {

  event.preventDefault();
  document.querySelector("#section4").scrollIntoView({
    behavior: "smooth"
  });

  document.querySelectorAll("a")[3].classList.add("active");

  document.querySelectorAll("a")[0].classList.remove("active");
  document.querySelectorAll("a")[1].classList.remove("active");
  document.querySelectorAll("a")[2].classList.remove("active");
  document.querySelectorAll("a")[4].classList.remove("active");

  document.querySelector("#section4").classList.add("your-active-class");

  document.querySelector("#section1").classList.remove("your-active-class");
  document.querySelector("#section2").classList.remove("your-active-class");
  document.querySelector("#section3").classList.remove("your-active-class");
  document.querySelector("#section5").classList.remove("your-active-class");


});
document.querySelectorAll("a")[4].addEventListener("click", function() {

  event.preventDefault();
  document.querySelector("#section5").scrollIntoView({
    behavior: "smooth"
  });

  document.querySelectorAll("a")[4].classList.add("active");

  document.querySelectorAll("a")[0].classList.remove("active");
  document.querySelectorAll("a")[1].classList.remove("active");
  document.querySelectorAll("a")[2].classList.remove("active");
  document.querySelectorAll("a")[3].classList.remove("active");


  document.querySelector("#section5").classList.add("your-active-class");

  document.querySelector("#section1").classList.remove("your-active-class");
  document.querySelector("#section2").classList.remove("your-active-class");
  document.querySelector("#section3").classList.remove("your-active-class");
  document.querySelector("#section4").classList.remove("your-active-class");

});


//scroll button to top

const top1 = document.querySelector("#top");
const up = document.querySelector("#up");

//when does the button show up
window.onscroll = function() {
  bottom();
};

function bottom() {
  document.body.scrollTop > 2000 ? top1.style.display = "block" : top1.style.display = "none";
}
// go top smoothly
up.addEventListener("click", function() {
  event.preventDefault();
  document.documentElement.scrollIntoView({
    behavior: "smooth"
  });
})





// hide navbar onscrolling
const navbar = document.querySelector(".navbar__menu");
const header = document.querySelector('.page__header');
let last = window.scrollY;

window.addEventListener("scroll", function() {
  last < window.scrollY ? navbar.classList.add("nav-hide") : navbar.classList.remove("nav-hide");
  last < window.scrollY ? header.classList.add("nav-hide") : header.classList.remove("nav-hide");
  //reassing value for the (last) to have the last window scrollY
  last = window.scrollY
});








/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */


/**
 * End Global Variables
 * Start Helper Functions
 *
 */



/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
