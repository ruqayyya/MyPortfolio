const icon = document.querySelector(".icon");
const BlockNav = document.querySelector(".BlockNav");
const active = document.querySelector(".active");
const closed = document.querySelector(".iconClosed");

icon.addEventListener("click", function () {
  BlockNav.innerHTML = `
      <nav class="navbar">
        <div class='iconClosed' onclick="closeNav()"> <i class="fa-solid fa-xmark"></i></div>
        <ul class="navlist">
          <li class="navitem">// home</li>
          <li class="navitem">// about</li>
          <li class="navitem">// project</li>
          <li class="navitem">// experience</li>
          <li class="navitem">// contact</li>
        </ul>
        <div class="title"><p>© 2024. Made with passion by Badirova Ruqayya. All right reserved</p></div>
      </nav>`;
  BlockNav.classList.toggle("active");
});

function closeNav() {
  BlockNav.innerHTML = "";
  BlockNav.classList.remove("active");
}


