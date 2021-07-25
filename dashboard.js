firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      var nickname = user.displayName;
      var userDocument = user.photoURL; // Using the phone number to store the Firestore document id.
      console.log(uid, nickname, userDocument);
      var greeting = "Hello "+nickname;
      document.getElementById('namevar').innerHTML = greeting;
      // ...
    } else {
      // User is signed out
      console.log('Not logged in.');
      // ...
    }
  });