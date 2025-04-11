const btn = document.getElementById("btn_password");
const password = document.getElementById("password");

btn.addEventListener("click", checkPassword);

function checkPassword() {
    if (password.length > 3 ) {
        alert("Password is correct");
    } else {
        alert("Password is incorrect");
    }
}