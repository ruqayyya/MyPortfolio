const cvInfo = document.querySelector(" .cvInfo");
const container = document.querySelector(" .contact .container");

const contactForm = document.querySelector(" .contact-form");

const cv = [
  {
    language: ["html", "css/scss", "JavaScript", "REACT", "MS Office"],
    education:
      "I studied at the Azerbaijan University of Architecture and Construction, majoring in Information Technologies. After that, I finished the Frontend in Texnoera course.",
  },
];

cv.map((info) => {
  cvInfo.innerHTML += `
    <div class="title">
      <h3>curriculum vitae (CV)</h3>
    </div>
    <div class="aboutMe">
      <h2>
        Skill
        <ul>
          <li>${info.language[0]}</li>
          <li>${info.language[1]}</li>
          <li>${info.language[2]}</li>
          <li>${info.language[3]}</li>
          <li>${info.language[4]}</li>
        </ul>
      </h2>
      <h2>
        Education
        <p>
          ${info.education}
        </p>
      </h2>
    </div>
`;
});
