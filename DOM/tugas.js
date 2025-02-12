// // onregister
let register = document.getElementById("register");
let login = document.getElementById("login");
let logout = document.getElementById("logoutbtn");
let loginSuccess = document.getElementById("ZeeyFx");
let tryAgain = document.getElementById("try");

register.style.display = "none";
logout.style.display = "none";
loginSuccess.style.display = "none";
tryAgain.style.display = "none";

// value register
let username = document.getElementById("Username-register");
let password = document.getElementById("Password-register");
let email = document.getElementById("Email");

// value login
let usernameLgn = document.getElementById("Username");
let passwordLgn = document.getElementById("Password");



function onRegister() {
  register.style.display = "block";
  login.style.display = "none";
  loginSuccess.style.display = "none";
  localStorage.setItem("username", username.value);
  localStorage.setItem("password", password.value);
  localStorage.setItem("email", email.value);
  if (
    localStorage.getItem("username") &&
    localStorage.getItem("password") &&
    localStorage.getItem("email")
  ) {
    location.reload();
  }
}

function onLogin() {
  login.style.display = "block";
  register.style.display = "none";
  loginSuccess.style.display = "none";
  localStorage.setItem("username", usernameLgn.value);
  localStorage.setItem("password", passwordLgn.value);
  if (
    localStorage.getItem("username") &&
    localStorage.getItem("password") &&
    localStorage.getItem("email")
  ) {
    alert("Login Success");
    loginSuccess.style.display = "block";
    tryAgain.style.display = "none";
  } else if (username.value === "admin" && password.value === 123) {
    alert("Login Success");
} 
}