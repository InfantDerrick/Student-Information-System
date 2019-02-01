// firebase.auth().onAuthStateChanged(function(user){
//   if(user){
//
//   }else{
//     window.open("./login.html", "_self");
//   }
// });
function logOut(){
  firebase.auth().signOut().catch(function(error){
    alert(error);
  });
}
