const social = document.querySelector(".social");


const socialLinks = [
  {
    href: "https://www.instagram.com/theruqayyya?igsh=cGN6ZXAzN3piZ3h2&utm_source=qr",
    iconClass: "fa-brands fa-instagram",
  },
  {
    href: "https://www.facebook.com/share/AR7SiU8PwXbV37uW/?mibextid=dGKdO6",
    iconClass: "fa-brands fa-facebook-f",
  },
  {
    href: "https://pin.it/Nvn9p1qcc",
    iconClass: "fa-brands fa-pinterest-p",
  },
  {
    href: "https://x.com/ruqayya04?t=U_DZrpbW1agzbJvHG_gVEg&s=09",
    iconClass: "fa-brands fa-x-twitter",
  },
  {
    href: "http://linkedin.com/in/rüqəyyə-bədirova-a6095b268",
    iconClass: "fa-brands fa-linkedin-in",
  },
];
socialLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
  
    const icon = document.createElement("i");
    icon.className = link.iconClass;
  
    anchor.appendChild(icon);
    social.appendChild(anchor);
  });
