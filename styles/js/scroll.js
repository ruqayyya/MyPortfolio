const aboutSection = document.querySelector(".about");

const Scrollicon = document.querySelector(".name .icon");

Scrollicon.addEventListener("click", function () {
  const targetPosition = aboutSection.offsetTop;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });
});
