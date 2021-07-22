
const login = document.getElementById('btnLogin');
const mailField = document.getElementById('txtEmail');
const passwordField = document.getElementById('txtPassword');
const auth = firebase.auth();

//Sign in function (email and password authentication)
const signInWithEmailFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;

    //Built in firebase function responsible for authentication
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            //Signed in successfully
            alert('Taking you to the dashboard');
            location.href = "dashboard.html";
        })
        .catch(error => {
            //Something went wrong
            console.error(error);
        })
}


login.addEventListener('click', signInWithEmailFunction);

