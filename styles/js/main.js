const icon = document.querySelector(".icon");
const BlockNav = document.querySelector(".BlockNav");
const active = document.querySelector(".active");
const closed = document.querySelector(".iconClosed");

icon.addEventListener("click", function () {
  BlockNav.innerHTML = `
      <nav class="navbar">
        <div class='iconClosed' onclick="closeNav()"> <i class="fa-solid fa-xmark"></i></div>
        <ul class="navlist">
        <li class="navitem homeS" onclick="scrollToSection('name')"> // home</li>
        <li class="navitem meS" onclick="scrollToSection('about')"> // about</li>
        <li class="navitem projectS" onclick="scrollToSection('project')"> // project</li>
        <li class="navitem" onclick="scrollToSection('experience')"> // experience</li>
        <li class="navitem contactS" onclick="scrollToSection('contact')"> // contact</li>
        </ul>
        <div class="title"><p>© 2024. Made with passion by Badirova Ruqayya. All right reserved</p></div>
      </nav>`;
  BlockNav.classList.toggle("active");
});

function closeNav() {
  BlockNav.innerHTML = "";
  BlockNav.classList.remove("active");
}

// add bloknav scroll

function scrollToSection(sectionClass) {
  const targetSection = document.querySelector("." + sectionClass);
  const targetPosition = targetSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth"
  });

  BlockNav.classList.remove("active");
  BlockNav.innerHTML = "";
}



