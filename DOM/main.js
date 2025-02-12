document.title = "Camp Traders";

// const body = document.body;
// body.style.backgroundColor = "cyan";

// const h1 = document.createElement("ZeeyFx");
// h1.innerHTML = "ZeeyFx";
// h1.style.color = "red";
// h1.style.fontSize = "30px";
// body.append(h1);

// tampilan
let h1 = document.getElementById("ZeeyFx");
let h1_2 = document.getElementById("try");


// onregister
// let username = document.getElementById("Username");
// let password = document.querySelector("#Password");
// let email = document.getElementById("Email");
let register = document.getElementById("register");


let login = document.getElementById("login");
let logout = document.getElementById("logout");

h1.style.display = "none";
h1_2.style.display = "none";
input.style.display = "block";
login.style.display = "block";
logout.style.display = "none";
register.style.display = "block";

function onRegister() {

}

function onLogin() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);

    if (username.value == "admin" && password.value == "123") {
        alert("Login Success");
        h1.style.display = "block";
        h1_2.style.display = "none";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";
        register.style.display = "none";

        localStorage.setItem("role", "admin");
    } else {
        alert("Invalid Username or Password");
        h1.style.display = "none";
        h1_2.style.display = "block";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";
        register.style.display = "none";

        localStorage.setItem("role", "user");
    }
} 

if (localStorage.getItem("username")) {
    h1.style.display = "block";
    h1_2.style.display = "none";
    input.style.display = "none";
    login.style.display = "none";
    register.style.display = "none";
    logout.style.display = "block";

    if (localStorage.getItem("role") == "admin") {
        h1.style.display = "block";
        h1_2.style.display = "none";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";
    } else {
        h1.style.display = "none";
        h1_2.style.display = "block";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";
    }
}   

function onLogout() {
    localStorage.clear();
    alert("Logout Success");
    location.reload();
}
