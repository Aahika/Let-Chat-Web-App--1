const firebaseConfig = {
      apiKey: "AIzaSyAWQZ0MOiwd372MCIk_hcya8DGEQLKsH9s",
      authDomain: "let-chat-web-app-97de2.firebaseapp.com",
      databaseURL: "https://let-chat-web-app-97de2-default-rtdb.firebaseio.com",
      projectId: "let-chat-web-app-97de2",
      storageBucket: "let-chat-web-app-97de2.appspot.com",
      messagingSenderId: "328198884671",
      appId: "1:328198884671:web:be42f7dde7646d5d39578a"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("username");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value

      localStorage.setItem("roomname",room_name);
  
      window.location="kwitter_page.html";  
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
