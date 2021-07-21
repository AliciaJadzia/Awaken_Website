var firebaseConfig = {
    apiKey: "AIzaSyCfmnNIU0xKHh64HYxLM2ppVmYHq5rOdtc",
    authDomain: "awaken-alarm.firebaseapp.com",
    projectId: "awaken-alarm",
    storageBucket: "awaken-alarm.appspot.com",
    messagingSenderId: "88573950609",
    appId: "1:88573950609:web:dd50a434b95c5304431d30",
    measurementId: "G-DXGNMY6GPW"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }



const signup = document.getElementById('btnSignup');
const mailField = document.getElementById('txtEmail');
const passwordField = document.getElementById('txtPassword');
const displayNameField = document.getElementById('nickname');
const auth = firebase.auth();


//Function wrapping all the signup parts including the email verification email
//triggered once the user clicks on the signup button
const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
        console.log('Signed Up Successfully !');
        alert('You have signed up succesfully!');
        location.href="index.html";
    })
    .catch(error => {
        console.error(error);
        alert('Something went wrong, try again.');
    })
}

signup.addEventListener('click', signUpFunction);

