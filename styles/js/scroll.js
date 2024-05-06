const Scrollicon = document.querySelector(".name .icon");
const home = document.querySelector(".homeS");
const me = document.querySelector(".meS");
const project = document.querySelector(".projectS");
const contact = document.querySelector(".contactS");
const nameSection = document.querySelector(".name");
const aboutSection = document.querySelector(".about");
const projectSection = document.querySelector(".project");
const contactSection = document.querySelector(".contact");

Scrollicon.addEventListener("click", function () {
  const targetPosition = aboutSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

home.addEventListener("click", function () {
    const targetPosition = nameSection.offsetTop;
  
    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  });

me.addEventListener("click", function () {
  const targetPosition = aboutSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

project.addEventListener("click", function () {
  const targetPosition = projectSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});

contact.addEventListener("click", function () {
  const targetPosition = contactSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
