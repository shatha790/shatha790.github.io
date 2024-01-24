/* -------------------------------------*/
let timVine = document.getElementById("about");
let navbar = document.getElementById("NavBar");

let navPos = navbar.getBoundingClientRect().top;

window.addEventListener("scroll", (e) => {
  let scrollPos = window.scrollY;
  if (scrollPos > navPos) {
    navbar.classList.add("sticky");
    // header.classList.add("navbarOffsetMargin");
  } else {
    navbar.classList.remove("sticky");
    // header.classList.remove("navbarOffsetMargin");
  }
});

// Sticky navigation

// const sectionHeroEl = document.querySelector(".hero-section");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(sectionHeroEl);
/* -------------------------------------*/
const containerEl = document.querySelector(".details");

const careers = ["Front-end developer"];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = ` <h1 style:font-size:30px> 
  ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 400);
}
/* -------------------------------------*/
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-list li");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
// BIND CLICK EVENT ON ALL LINKS
navItem.forEach((navItems) => {
  navItems.addEventListener("click", () => {
    // ON CLICK, REMOVE active CLASS FROM navBarLinks
    headerEl.classList.remove("nav-open");
  });
});
