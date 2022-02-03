
var firebaseConfig = {
      apiKey: "AIzaSyAYbiyF8qHWk0xGKHuWZMhWKHUHi80mnEo",
      authDomain: "kiwtter-c0ae9.firebaseapp.com",
      databaseURL: "https://kiwtter-c0ae9-default-rtdb.firebaseio.com",
      projectId: "kiwtter-c0ae9",
      storageBucket: "kiwtter-c0ae9.appspot.com",
      messagingSenderId: "719668747366",
      appId: "1:719668747366:web:d53da0e6677451a80561a7"
    };
    
    // Initialize Firebase
 const app = initializeApp(firebaseConfig);


 function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
      Room_names = childKey;
       console.log("Room Name - " + Room_names); 
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row; });
       }); 
      } getData()


function logout(){
   localStorage.removeItem("user_name") ;
  
      localStorage.removeItem("room_name") ;
      window.location="index.html";
      
}

function add_room(){
room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
});
}
function redirectToRoomName(name)
{
      console.log("name");
      localStorage.setItem("room_name",name);
      window.location()=kwitter_page.html;
      
}