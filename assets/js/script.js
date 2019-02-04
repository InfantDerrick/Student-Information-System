firebase.auth().onAuthStateChanged(function(user){
  if(user){

  }else{
    window.open("./login.html", "_self");
  }
});
$(document).ready(function() {
    console.log( "ready!" );
});
function logOut(){
  firebase.auth().signOut().catch(function(error){
    alert(error);
  });
}
