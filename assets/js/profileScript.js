firebase.auth().onAuthStateChanged(function(user){
  if(user){
    $(".profilePic").attr("src", user.profilePic);
  }else{
    window.open("./login.html", "_self");
  }
});
