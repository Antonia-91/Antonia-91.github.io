/* OBS!! jag har inte lärt mig js ännu, så detta är något jag har youtubat mig till, eftersom jag vill få in en cool effekt! , så just detta är det inte så säkert att jag kan återberätta på er.. inte  i nuläger iallafall, men säkert efter js kursen! :) 

"menuBtn" är en wrapper och "hamburger" är en span */

const menuBtn = document.querySelector("#menu-btn");
const hamburger = document.querySelector("#menu-btn__burger");
const nav = document.querySelector("#nav");
const menuNav = document.querySelector("#menu-nav"); /* menuNav är min ul*/
const navItems = document.querySelectorAll(".menu-nav__item");
let projectItem = document.querySelector("#projectItem");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item) => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item) => item.classList.remove("open"));

    showMenu = false;
  }
}

fetch("https://api.github.com/users/Antonia-91/repos")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    console.log("gitHub API", json[0].url);

    let projectItem = document.querySelector("#projectItem");

    projectItem.insertAdjacentHTML(
      "beforeend",
      `<img src="" alt="My Project" />
      <p> ${json[0].name} </p>
    <div class="projects__btns">
      <a href="${json[0].html_url}" class="projects__btn">
        <i class="fas fa-eye"></i> Preview
      </a>
      <a href="#!" class="projects__btn">
        <i class="fab fa-github"></i> Github
      </a>
    </div>`
    );
  });
