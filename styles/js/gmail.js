const emailInput = document.getElementById("email");
const form = document.querySelector(".contact-form");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.(com|gov|ru)$/.test(email);
}

function sendEmail(email) {
  console.log("E-posta gönderildi:", email);
}

form.addEventListener("submit", function(event) {
  event.preventDefault(); 
  
  const email = emailInput.value;
  
  if (validateEmail(email)) {
    sendEmail(email);
    form.reset(); 
    alert("E-posta göndərildi!");
  } else {
    alert("Zəhmət olmasa düzgün gmail yazın.");
  }
});
