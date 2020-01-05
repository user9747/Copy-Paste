const firebaseConfig = {
    apiKey: "AIzaSyAR002Rdn3mCUIDZyHyRiQwxvfhRLHvHNQ",
    authDomain: "merry-x-mas.firebaseapp.com",
    databaseURL: "https://merry-x-mas.firebaseio.com",
    projectId: "merry-x-mas",
    storageBucket: "merry-x-mas.appspot.com",
    messagingSenderId: "570510159109",
    appId: "1:570510159109:web:224579b73b47b11d4c5b6c",
    measurementId: "G-B93NJXRD55"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('up and running')
var db = firebase.firestore();

msg = document.getElementById("message")

function pasteFirebase() {
    console.log("paste")
    id = document.getElementById("id").value
    content = document.getElementById("content").value
    db.collection("copy").doc(id).set({
        data: content
    })
    .then(function(docRef) {
        console.log("Document written with ID: ");
        msg.innerHTML = "<p class='success'>Done...Share the key to copy</p>"
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
function copyFirebase() {
    console.log("copy")
    id = document.getElementById("id").value
    content = document.getElementById("content")
    db.collection("copy").doc(id).get().then(function(doc) {
        if (doc.exists) {
            console.log("Document data:", doc.data());
            content.value = doc.data().data;
            content.select();
            content.setSelectionRange(0, 99999); /*For mobile devices*/

            document.execCommand("copy");
            msg.innerHTML = "<p class='success'>Done... Copied to clipboard</p>"
        } else {
            console.log("No such document!");
            msg.innerHTML="<p class='error'>Check key</p>";
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
        msg.innerHTML="<p class='error'>Check Key</p>";
    });
}

document.getElementById("paste").addEventListener('click', pasteFirebase)
document.getElementById("copy").addEventListener('click', copyFirebase)