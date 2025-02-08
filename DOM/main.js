// document.title = "Camp Traders";

// const body = document.body;
// body.style.backgroundColor = "cyan";

// const h1 = document.createElement("ZeeyFx");
// h1.innerHTML = "ZeeyFx";
// h1.style.color = "red";
// h1.style.fontSize = "30px";
// body.append(h1);

let h1 = document.getElementById("ZeeyFx");
h1.style.display = "none";

let h1_2 = document.getElementById("try");
h1_2.style.display = "none";

let username = document.getElementById("Username");
let password = document.querySelector("#Password");


function onLogin() {
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;
    if (username === "admin" && password === "1234") {
        alert("Login Success");
        h1.style.display = "block";
        console.log(username);
        console.log(password);
    } else {
        alert("Login Failed");
        h1_2.style.display = "block";
    }
}