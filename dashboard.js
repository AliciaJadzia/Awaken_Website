var db = firebase.firestore();
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    let dataStr = "";
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    var uid = user.uid;
    var nickname = user.displayName;
    var userDocument = user.uid; // Using the phone number to store the Firestore document id.
    console.log(uid, nickname, userDocument);
    var greeting = "Hello " + nickname + ", good to see you.";
    document.getElementById('namevar').innerHTML = greeting;
    var docRef = db.collection("users").doc(userDocument);

    docRef.collection("data").get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          console.log(doc.id, " => ", doc.data());
          try {
            let wake = doc.data().wakeup_time;
            if (wake != undefined) {
              var wakef = wake.replace(/_/g, " ");
              dataStr = dataStr + "Wake up event:  " + wakef +'<br>';
            }

          } catch (error) {
            console.log(error);
          }

          try {
            let slp = doc.data().sleep_time;
            if (slp != undefined) {
              var slpf = slp.replace(/_/g, " ");
              dataStr = dataStr +  "Sleep Event:  " + slpf +'<br>';
            }


          } catch (error) {
            console.log(error);
          }

          console.log(dataStr);
          document.getElementById('rawdata').innerHTML = dataStr;

        });
      });





    // ...
  } else {
    // User is signed out
    console.log('Not logged in.');
    alert('You have to log in to Awaken')
    // ...
  }
});