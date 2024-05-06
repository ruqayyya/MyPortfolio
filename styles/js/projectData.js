const infoCard = document.querySelector(".project .info");

const projects = [
  {
    link: "https://github.com/ruqayyya/Eventcon",
    Image: "/assets/images/project/event.png",
    language: ["html", "css", "JavaScript"],
    altText: "event",
  },
  {
    link: "https://github.com/ruqayyya/myFood",
    Image: "/assets/images/project/myFood.png",
    language: ["html", "css", "JavaScript"],
    altText: "myFood",
  },
  {
    link: "https://github.com/ruqayyya/SpaceX",
    Image: "/assets/images/project/spaceX.png",
    language: ["html", "css", "JavaScript"],
    altText: "spaceX",
  },
  {
    link: "https://github.com/ruqayyya/animation",
    Image: "/assets/images/project/animation.png",
    language: ["html", "css", "JavaScript"],
    altText: "animation",
  },
  {
    link: "https://github.com/ruqayyya/Appru",
    Image: "/assets/images/project/appru.png",
    language: ["html", "css", "JavaScript"],
    altText: "appru",
  },
  {
    link: "https://github.com/ruqayyya/bexer",
    Image: "/assets/images/project/bexer.png",
    language: ["html", "css", "JavaScript"],
    altText: "bexer",
  },
  {
    Image: "/assets/images/project/calc.png",
    language: ["html", "css", "JavaScript"],
    altText: "event",
  },
  {
    link: "https://github.com/ruqayyya/clock",
    Image: "/assets/images/project/clock.png",
    language: ["html", "css", "JavaScript"],
    altText: "clock",
  },
  {
    link: "https://github.com/ruqayyya/CONFRANCE",
    Image: "/assets/images/project/confrance.png",
    language: ["html", "css", "JavaScript"],
    altText: "confrance",
  },
];

projects.map((project) => {
  infoCard.innerHTML += `
    <div class="card">
    <a href="${project.link}" target="_blank">
                <div class="image">
                  <img src=${project.Image} alt=${project.altText} />
                  <div class="infoCard">
                    <span>${project.language[0]}</span>
                    <span>${project.language[1]}</span>
                    <span>${project.language[2]}</span>
                  </div>
                </div>
              </div>
`;
});
