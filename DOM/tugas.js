// // onregister
let registerbtn = document.getElementById("registerbtn");
let login = document.getElementById("loginbtn");
let logout = document.getElementById("logoutbtn");
let register = document.getElementById("register");
let loginLayout = document.getElementById("login");
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
  loginLayout.style.display = "none";
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
  if (usernameLgn.value == "admin" && passwordLgn.value == 123) {
    alert("Login Success");
    loginSuccess.style.display = "block";
    logout.style.display = "block";
    login.style.display = "none";
    loginLayout.style.display = "none";
    registerbtn.style.display = "none";
    tryAgain.style.display = "none";
  } else if (
    localStorage.getItem("username") &&
    localStorage.getItem("password") &&
    localStorage.getItem("email")
  ) {
    alert("Login Success");
    loginSuccess.style.display = "block";
    logout.style.display = "block";
    login.style.display = "none";
    loginLayout.style.display = "none";
    registerbtn.style.display = "none";
    tryAgain.style.display = "none";
  } else {
    alert("Invalid Username or Password");
    tryAgain.style.display = "block";
  }
}

function onLogout () {
  localStorage.clear();
  alert("Logout Success");
  location.reload();
}