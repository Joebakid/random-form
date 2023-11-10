const inputPlaceholder = document.querySelectorAll("input[placeholder]");
const form = document.querySelector("form");

inputPlaceholder.forEach((input) => {
  input.addEventListener("click", function () {
    this.classList.toggle("input-border-color");
    console.log("clicked");
  });
});

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_sbogitg";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.value = "Send Email";
      alert("Sent!");
    },
    (err) => {
      btn.value = "Send Email";
      alert(JSON.stringify(err));
    }
  );
});

// password
function togglePassword() {
  var passwordInput = document.getElementById("password");
  var toggleIcon = document.querySelector(".toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.textContent = "Hide Password";
  } else {
    passwordInput.type = "password";
    toggleIcon.textContent = "Show Password";
  }
}
