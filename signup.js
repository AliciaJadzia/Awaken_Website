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
} else {
    firebase.app(); // if already initialized, use that one
}

var db = firebase.firestore();


const signup = document.getElementById('btnSignup');
const mailField = document.getElementById('txtEmail');
const passwordField = document.getElementById('txtPassword');
const displayNameField = document.getElementById('txtNick');
const auth = firebase.auth();


const signUpFunction = () => {
    const email = mailField.value;
    const password = passwordField.value;
    const nickname = displayNameField.value;

    //Built in firebase function responsible for signing up a user
    auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            const user = firebase.auth().currentUser;
            const docid = user.uid;
            db.collection("users").doc(docid).set({
                email: email,
                nickname: nickname,
                buddy: "Default Buddy", // Default, gets overwritten by app. String
                alarm_hour: 7, // Default, gets overwritten by app. Int 0 to 23
                alarm_minute: 30, // Default, gets overwritten by app. Int 0 to 59
            }).then(() => {
                console.log("Document written with ID: ", docid);
                
                user.updateProfile({
                    displayName: nickname,
                }).then(() => {
                    // Update successful
                    console.log('Updated nickname & id', docid);
                    console.log('Signed Up Successfully !');
                    alert('You have signed up succesfully!');
                    location.href = "login.html";
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                    console.log(error);
                });
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });



        })
        .catch(error => {
            console.error(error);
            alert('Something went wrong, try again.');
        });



}

signup.addEventListener('click', signUpFunction);




