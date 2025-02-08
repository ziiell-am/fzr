document.title = "Camp Traders";

// const body = document.body;
// body.style.backgroundColor = "cyan";

// const h1 = document.createElement("ZeeyFx");
// h1.innerHTML = "ZeeyFx";
// h1.style.color = "red";
// h1.style.fontSize = "30px";
// body.append(h1);

let h1 = document.getElementById("ZeeyFx");
let h1_2 = document.getElementById("try");

let username = document.getElementById("Username");
let password = document.querySelector("#Password");

let input = document.querySelector(".input");

let login = document.getElementById("login");
let logout = document.getElementById("logout");

h1.style.display = "none";
h1_2.style.display = "none";
input.style.display = "block";
login.style.display = "block";
logout.style.display = "none";

function onLogin() {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);

    if (username.value == "admin" && password.value == 1234) {
        alert("Login Success");
        h1.style.display = "block";
        h1_2.style.display = "none";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";

        localStorage.setItem("role", "admin");
        localStorage.setItem("password", "1234");

    } else {
        alert("Login Failed");
        h1.style.display = "none";
        h1_2.style.display = "block";
        input.style.display = "none";
        login.style.display = "none";
        logout.style.display = "block";

        localStorage.setItem("role", "user");
        localStorage.setItem("password", "1234");
    }
} 

if (localStorage.getItem("username")) {
    h1.style.display = "block";
    h1_2.style.display = "none";
    input.style.display = "none";
    login.style.display = "none";
    logout.style.display = "block";
}   

function onLogout() {
    localStorage.clear();
    alert("Logout Success");
    location.reload();
}
