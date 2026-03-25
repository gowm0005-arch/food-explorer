function signup() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            alert("Signup Successful");
            window.location = "login.html";
        })
        .catch(error => {
            alert(error.message);
        });

}


function login() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            alert("Login Successful");
        })
        .catch(error => {
            alert(error.message);
        });

}