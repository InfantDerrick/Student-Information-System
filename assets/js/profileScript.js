firebase.auth().onAuthStateChanged(function(user){
  if(user){
    $(".profilePic").attr("src", user.photoURL);
  }else{
    window.open("./login.html", "_self");
  }
});
